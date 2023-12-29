package com.example.marketinsidew.code.marketInsideDto;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
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

		// Prepare CSV output
		FileWriter out = new FileWriter(
			csvFilePath + request.getFromDate() + "_" + request.getToDate() + "_" + request.getCountry() + "_"
				+ request.getHsCode() + ".csv");

		// Create a list for headers from the first JSON object
		List<String> headers = new ArrayList<>();
		jsonNode.get(0).fieldNames().forEachRemaining(headers::add);
		headers.add("CAS");
		// Create CSVPrinter with headers
		CSVPrinter printer = new CSVPrinter(out, CSVFormat.DEFAULT.withHeader(headers.toArray(new String[0])));

		// Iterate over JSON nodes
		for (JsonNode node : jsonNode) {
			List<String> csvValues = new ArrayList<>(); // To store the values for each CSV row
			String casNumber = ""; // To store the CAS number when found
			Iterator<String> fieldNames = node.fieldNames();
			while (fieldNames.hasNext()) {
				String fieldName = fieldNames.next();
				String value = node.get(fieldName).asText();

				// Check if the field is a date field
				if ("date".equals(fieldName)) {
					// Split the string at the space and take the first part
					value = value.split(" ")[0];
					String[] dates = value.split("/");
					String month = dates[0];
					String date = dates[1];
					String year = dates[2];
					value = year + "-" + month + "-" + date;
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
			// Print the row to the CSV
			printer.printRecord(csvValues);
		}

		// Close resources
		printer.close();
		out.close();
	}
}
