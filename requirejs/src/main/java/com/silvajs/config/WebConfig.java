package com.silvajs.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

	@Value("${debug}")
	private boolean debug;

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		String jsLocation = "classpath:/static/js/";
		if (!debug) {
			jsLocation = "classpath:/static/js-build/";
		}
		registry.addResourceHandler("/js/**").addResourceLocations(jsLocation);
	}

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("index");
	}

}
