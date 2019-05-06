package com.bll.config;

import javax.servlet.Filter;

import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

/**
 * web配置文件
 * */
public class WebConfig extends AbstractAnnotationConfigDispatcherServletInitializer {

	/**
	 * 获取spring配置
	 * */
	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class<?>[] {SpringConfig.class};
	}

	/**
	 * 获取springMvc配置
	 * */
	@Override
	protected Class<?>[] getServletConfigClasses() {
		return new Class<?>[] {SpringMvcConfig.class};
	}

	/**
	 * 设置springMvc拦截
	 * */
	@Override
	protected String[] getServletMappings() {
		return new String[] {"/"};
	}
	
	/**
	 * 设置数据编码格式
	 * */
	@Override
	protected Filter[] getServletFilters() {
		CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
		characterEncodingFilter.setForceEncoding(true);
		characterEncodingFilter.setEncoding("UTF-8");
		return new Filter[] {characterEncodingFilter};
	}

}
