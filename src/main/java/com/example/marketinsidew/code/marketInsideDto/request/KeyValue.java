package com.example.marketinsidew.code.marketInsideDto.request;

import lombok.Getter;

@Getter
public class KeyValue {
	private final String key;
	private final String value;

	public KeyValue(String key, String value) {
		this.key = key;
		this.value = value;
	}
}
