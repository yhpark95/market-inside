package com.example.marketinsidew.code;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class TotalShipmentRequest {
	private String toDate;
	private String fromDate;
	private String hsCode;
	private String country;
	private String countryId;
	private String dataTypeId;
	private String totalShipmentValue;

	@Builder
	public TotalShipmentRequest(String toDate, String fromDate, String hsCode, String country, String countryId,
		String dataTypeId, String totalShipmentValue) {
		this.toDate = toDate;
		this.fromDate = fromDate;
		this.hsCode = hsCode;
		this.country = country;
		this.countryId = countryId;
		this.dataTypeId = dataTypeId;
		this.totalShipmentValue = totalShipmentValue;
	}
}
