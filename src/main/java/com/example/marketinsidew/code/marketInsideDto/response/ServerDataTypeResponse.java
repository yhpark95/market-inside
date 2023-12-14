package com.example.marketinsidew.code.marketInsideDto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ServerDataTypeResponse {
	private DataTypeList responseData;
	private int responseCode;
	private String responseMessage;
}
