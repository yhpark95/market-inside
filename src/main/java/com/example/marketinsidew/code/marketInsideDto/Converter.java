package com.example.marketinsidew.code.marketInsideDto;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class Converter {
	public void convert(String jsonData) throws IOException {
		String csvFilePath = "C:\\Users\\yh945\\OneDrive\\문서\\Codesquad\\market-inside-w\\src\\main\\resources\\files\\";
		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode jsonNode = objectMapper.readTree(jsonData);

		// Prepare CSV output
		FileWriter out = new FileWriter(csvFilePath + UUID.randomUUID() + ".csv");

		// Create a list for headers from the first JSON object
		List<String> headers = new ArrayList<>();
		jsonNode.get(0).fieldNames().forEachRemaining(headers::add);

		// Create CSVPrinter with headers
		CSVPrinter printer = new CSVPrinter(out, CSVFormat.DEFAULT.withHeader(headers.toArray(new String[0])));

		// Iterate over JSON nodes
		for (JsonNode node : jsonNode) {
			Iterator<String> fieldNames = node.fieldNames();
			while (fieldNames.hasNext()) {
				String fieldName = fieldNames.next();
				printer.print(node.get(fieldName).asText());
			}
			printer.println();
		}

		// Close resources
		printer.close();
		out.close();
	}
}
