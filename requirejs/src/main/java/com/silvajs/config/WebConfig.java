package com.silvajs.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

	@Value("${debug}")
	private boolean debug;

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		String location = "classpath:/static/src/";
		if (!debug) {
		  location = "classpath:/static/build/";
		}
		registry.addResourceHandler("/js/**").addResourceLocations(location + "js/").setCacheControl(CacheControl.noCache());
		registry.addResourceHandler("/images/**").addResourceLocations(location + "images/");
		registry.addResourceHandler("/css/**").addResourceLocations(location + "css/");
	}

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("index");
		registry.addViewController("/user.html").setViewName("user");
	}

}
