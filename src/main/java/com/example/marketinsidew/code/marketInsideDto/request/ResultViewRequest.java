package com.example.marketinsidew.code.marketInsideDto.request;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class ResultViewRequest {
	private final List<String> resultViewDetail = new ArrayList<>();
	private String dataAvailabilityId;
	private List<ResultViewDisplay> resultViewDisplay = new ArrayList<>();
	private String heading;
	private int row;
	private int page;
	private List<String> dateRange;
	private ConditionFilter filter;
	private ShipmentDetail shipmentDetail;

	@Builder
	public ResultViewRequest(String dataAvailabilityId, List<ResultViewDisplay> resultViewDisplay, String heading,
		int row,
		int page, List<String> dateRange, ConditionFilter filter, ShipmentDetail shipmentDetail) {
		this.dataAvailabilityId = dataAvailabilityId;
		this.resultViewDisplay = resultViewDisplay;
		this.heading = heading;
		this.row = row;
		this.page = page;
		this.dateRange = dateRange;
		this.filter = filter;
		this.shipmentDetail = shipmentDetail;
	}

	@Getter
	@AllArgsConstructor
	public static class ResultViewDisplay {
		private String header;
		private String accessor;
	}

	@Getter
	@AllArgsConstructor
	public static class ShipmentDetail {
		private String shipmentValue;
		private String totalValue;
	}
}
