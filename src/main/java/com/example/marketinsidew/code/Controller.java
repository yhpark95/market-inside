package com.example.marketinsidew.code;

import java.io.IOException;
import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.marketinsidew.code.marketInsideDto.response.DataTypeDetail;
import com.example.marketinsidew.code.marketInsideDto.response.TotalShipmentResponse;

import lombok.RequiredArgsConstructor;

@org.springframework.stereotype.Controller
@RequiredArgsConstructor
public class Controller {
	private final APIservice apiService;

	@PostMapping("/totalShipment")
	public String getTotalShipment(@RequestBody TotalShipmentRequest request, Model model) {
		TotalShipmentResponse response = apiService.getTotalShipment(request);
		model.addAttribute("response", response);
		model.addAttribute("request", request);
		return "totalShipmentResult";
	}

	@PostMapping("/dataType")
	public String getDataType(@RequestBody TotalShipmentRequest request, Model model) {
		List<DataTypeDetail> response = apiService.getDataType(request);
		model.addAttribute("response", response);
		model.addAttribute("totalShipment", request);
		return "showDataType";
	}

	@PostMapping("/resultView")
	public String download(@RequestBody TotalShipmentRequest request) throws IOException {
		apiService.download(request);
		return "redirect:/";
	}

	@GetMapping("")
	public String home() {
		return "home";
	}
}
