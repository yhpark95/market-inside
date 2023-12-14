package com.example.marketinsidew.code;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.marketinsidew.code.marketInsideDto.Converter;
import com.example.marketinsidew.code.marketInsideDto.request.ClientTotalShipmentRequest;
import com.example.marketinsidew.code.marketInsideDto.request.ConditionFilter;
import com.example.marketinsidew.code.marketInsideDto.request.KeyValue;
import com.example.marketinsidew.code.marketInsideDto.request.ResultViewRequest;
import com.example.marketinsidew.code.marketInsideDto.response.DataTypeDetail;
import com.example.marketinsidew.code.marketInsideDto.response.ServerDataTypeResponse;
import com.example.marketinsidew.code.marketInsideDto.response.ServerResultView;
import com.example.marketinsidew.code.marketInsideDto.response.ServerTotalShipment;
import com.example.marketinsidew.code.marketInsideDto.response.TotalShipmentResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class APIservice {
	private final Converter converter;

	public TotalShipmentResponse getTotalShipment(TotalShipmentRequest request) {
		ConditionFilter conditionFilter = new ConditionFilter();
		conditionFilter.getAnd().add(new KeyValue("hs_code", request.getHsCode()));
		ClientTotalShipmentRequest totalShipmentRequest = ClientTotalShipmentRequest.builder()
			.dataAvailabilityId(request.getDataTypeId())
			.sumOn("Total_Value_USD")
			.groupBy("")
			.dateRange(List.of(request.getFromDate(), request.getToDate()))
			.heading("")
			.searchBy("")
			.filter(conditionFilter)
			.build();
		return WebClient.create()
			.post()
			.uri(Constants.TOTAL_SHIPMENT_URL)
			.headers(header -> {
				header.setBearerAuth(Constants.TOKEN);
				header.setContentType(MediaType.APPLICATION_JSON);
				header.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
				header.setAcceptCharset(Collections.singletonList(StandardCharsets.UTF_8));
			})
			.bodyValue(totalShipmentRequest)
			.retrieve()
			.bodyToMono(ServerTotalShipment.class)
			.block().getResponseData();
	}

	public List<DataTypeDetail> getDataType(TotalShipmentRequest request) {
		ServerDataTypeResponse response = WebClient.create()
			.get()
			.uri(Constants.COUNTRIES_DATA_TYPE_URL + request.getCountryId())
			.headers(header -> {
				header.setBearerAuth(Constants.TOKEN);
				header.setAcceptCharset(Collections.singletonList(StandardCharsets.UTF_8));
			})
			.retrieve()
			.bodyToMono(ServerDataTypeResponse.class)
			.block();
		return response.getResponseData().getDataTypeDetail();
	}

	public void download(TotalShipmentRequest request) throws IOException {
		ConditionFilter conditionFilter = new ConditionFilter();
		conditionFilter.getAnd().add(new KeyValue("hs_code", request.getHsCode()));
		List<ResultViewRequest.ResultViewDisplay> list = createResultViewDisplay();
		ResultViewRequest resultViewRequest = ResultViewRequest.builder()
			.resultViewDisplay(list)
			.row(Integer.parseInt(request.getTotalShipmentValue()))
			.shipmentDetail(new ResultViewRequest.ShipmentDetail("", ""))
			.dataAvailabilityId(request.getDataTypeId())
			.dateRange(List.of(request.getFromDate(), request.getToDate()))
			.heading("")
			.page(1)
			.filter(conditionFilter)
			.build();
		ServerResultView.ResultViewResponse response = WebClient.create()
			.post()
			.uri(Constants.RESULT_VIEW_URL)
			.headers(header -> {
				header.setBearerAuth(Constants.TOKEN);
				header.setContentType(MediaType.APPLICATION_JSON);
				header.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
				header.setAcceptCharset(Collections.singletonList(StandardCharsets.UTF_8));
			})
			.bodyValue(resultViewRequest)
			.retrieve()
			.bodyToMono(ServerResultView.class)
			.block().getResponseData();
		converter.convert(response.getResult());
		System.out.println(0);
	}

	private List<ResultViewRequest.ResultViewDisplay> createResultViewDisplay() {
		List<ResultViewRequest.ResultViewDisplay> list = new ArrayList<>();
		list.add(new ResultViewRequest.ResultViewDisplay("Date", "date"));
		list.add(new ResultViewRequest.ResultViewDisplay("Supplier", "supplier"));
		list.add(new ResultViewRequest.ResultViewDisplay("Importer", "importer"));
		list.add(new ResultViewRequest.ResultViewDisplay("Origin Country", "origin_country"));
		list.add(new ResultViewRequest.ResultViewDisplay("Export Country", "export_country"));
		list.add(new ResultViewRequest.ResultViewDisplay("Product Description", "product_description"));
		list.add(new ResultViewRequest.ResultViewDisplay("Unit", "unit"));
		list.add(new ResultViewRequest.ResultViewDisplay("Total Value Usd", "total_value_usd"));
		list.add(new ResultViewRequest.ResultViewDisplay("Quantity", "quantity"));
		list.add(new ResultViewRequest.ResultViewDisplay("Hs Code", "hs_code"));
		return list;
	}
}
