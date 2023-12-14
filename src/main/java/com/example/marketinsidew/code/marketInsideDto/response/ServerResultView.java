package com.example.marketinsidew.code.marketInsideDto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ServerResultView {
	private ResultViewResponse responseData;
	private int responseCode;
	private String responseMessage;

	@NoArgsConstructor
	@Setter
	@Getter
	public static class ResultViewResponse {
		private String result;
		private int count;
	}
}
