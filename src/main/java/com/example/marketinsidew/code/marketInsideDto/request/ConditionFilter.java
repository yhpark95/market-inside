package com.example.marketinsidew.code.marketInsideDto.request;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;

@Getter
public class ConditionFilter {
	private final List<KeyValue> and = new ArrayList<>();

	private final List<KeyValue> and_Not = new ArrayList<>();

	private final List<KeyValue> and_Range = new ArrayList<>();

	private final List<KeyValue> Or = new ArrayList<>();
}
