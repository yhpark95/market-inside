package com.example.marketinsidew.code.marketInsideDto;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.springframework.stereotype.Service;

import com.example.marketinsidew.code.TotalShipmentRequest;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class Converter {

	public void convert(String jsonData, TotalShipmentRequest request) throws IOException {
		String csvFilePath = "C:\\Users\\yh945\\OneDrive\\문서\\Codesquad\\market-inside-w\\src\\main\\resources\\files\\";
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode jsonNode = objectMapper.readTree(jsonData);
		Set<String> kgList = new HashSet<>(Arrays.asList("Kg", "KGA", "KGM", "KGS", "Kilogram", "Kilograms", "PKG"));
		Set<String> gList = new HashSet<>(Arrays.asList("GMS", "GRM", "GRS"));
		// Prepare CSV output
		FileWriter out = new FileWriter(
			csvFilePath + request.getFromDate() + "_" + request.getToDate() + "_" + request.getCountry() + "_"
				+ request.getHsCode() + ".csv");

		// Create a list for headers from the first JSON object
		List<String> headers = new ArrayList<>();
		jsonNode.get(0).fieldNames().forEachRemaining(headers::add);
		headers.add("CAS");
		headers.add("TON");
		headers.add("year");
		headers.add("month");
		// Create CSVPrinter with headers
		CSVPrinter printer = new CSVPrinter(out, CSVFormat.DEFAULT.withHeader(headers.toArray(new String[0])));

		// Iterate over JSON nodes
		for (JsonNode node : jsonNode) {
			List<String> csvValues = new ArrayList<>(); // To store the values for each CSV row
			String casNumber = ""; // To store the CAS number when found
			double tonValue = 0; // To store the converted ton value
			String month = "";
			String year = "";
			Iterator<String> fieldNames = node.fieldNames();
			while (fieldNames.hasNext()) {
				String fieldName = fieldNames.next();
				String value = node.get(fieldName).asText();

				// Check if the field is a date field
				if ("date".equals(fieldName)) {
					// Split the string at the space and take the first part
					value = value.split(" ")[0];
					String[] dates = value.split("/");
					month = dates[0];
					String date = dates[1];
					year = dates[2];
					value = year + "-" + month + "-" + date;
				}
				if (fieldName.equals("unit") && kgList.contains(value)) {
					double kgValue = node.get("quantity").asDouble();
					tonValue = kgValue / 1000; // Conversion from kg to ton
				}
				if (fieldName.equals("unit") && gList.contains(value)) {
					double kgValue = node.get("quantity").asDouble();
					tonValue = kgValue / 1_000_000; // Conversion from kg to ton
				}
				if (fieldName.equals("product_description")) {
					Pattern pattern = Pattern.compile("\\d{2,7}-\\d{2}-\\d");
					Matcher matcher = pattern.matcher(value);
					if (matcher.find()) { // If a CAS number is found
						casNumber = matcher.group(); // Extract the CAS number
					}
				}
				csvValues.add(value); // Add the current field's value to the list
			}
			// Add the CAS number to the list of values for this row
			if (!casNumber.isEmpty()) {
				csvValues.add(casNumber);
			} else {
				csvValues.add(""); // Add an empty string if no CAS number was found
			}
			// Add the converted ton value under the TON header
			csvValues.add(String.valueOf(tonValue));
			csvValues.add(year);
			csvValues.add(month);
			// Print the row to the CSV
			printer.printRecord(csvValues);
		}

		// Close resources
		printer.close();
		out.close();
	}
}
