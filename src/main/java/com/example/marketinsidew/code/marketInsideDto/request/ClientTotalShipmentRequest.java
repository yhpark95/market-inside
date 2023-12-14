package com.example.marketinsidew.code.marketInsideDto.request;

import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class ClientTotalShipmentRequest {
	private String dataAvailabilityId;

	private String heading;

	private List<String> dateRange;

	private String groupBy;

	private String sumOn;

	private ConditionFilter filter;

	private String searchBy;

	@Builder
	public ClientTotalShipmentRequest(String dataAvailabilityId, String heading, List<String> dateRange, String groupBy,
		String sumOn, ConditionFilter filter, String searchBy) {
		this.dataAvailabilityId = dataAvailabilityId;
		this.heading = heading;
		this.dateRange = dateRange;
		this.groupBy = groupBy;
		this.sumOn = sumOn;
		this.filter = filter;
		this.searchBy = searchBy;
	}
}
