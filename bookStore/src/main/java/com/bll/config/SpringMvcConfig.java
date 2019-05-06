package com.bll.config;


import javax.servlet.ServletContext;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;
import org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver;

import freemarker.cache.WebappTemplateLoader;


/**
 * springMvc配置文件
 * */
@Configuration
@EnableWebMvc
@EnableAspectJAutoProxy(proxyTargetClass=true)
@ComponentScan(
	basePackages={ "com.bll.**.controller" }
)
public class SpringMvcConfig extends WebMvcConfigurerAdapter {
	
	/**
	 * 设置页面模板引擎
	 * */
	@Bean
	public FreeMarkerConfigurer freeMarkerConfigurer(ServletContext servletContext) {
		FreeMarkerConfigurer freeMarkerConfigurer = new FreeMarkerConfigurer();
		freemarker.template.Configuration configuration = new freemarker.template.Configuration(freemarker.template.Configuration.VERSION_2_3_23);
		configuration.setTemplateLoader(new WebappTemplateLoader(servletContext));
		configuration.setDefaultEncoding("UTF-8");
		freeMarkerConfigurer.setConfiguration(configuration );
		return freeMarkerConfigurer; 
	}
	@Bean
	public FreeMarkerViewResolver freeMarkerViewResolver() {
		FreeMarkerViewResolver freeMarkerViewResolver = new FreeMarkerViewResolver();
		freeMarkerViewResolver.setPrefix("/");
		freeMarkerViewResolver.setSuffix(".ftl");
		freeMarkerViewResolver.setContentType("text/html;charset=UTF-8");
		return freeMarkerViewResolver;
	}

	/**
	 * 不拦截带后缀的请求
	 * */
	@Override
	public void configurePathMatch(PathMatchConfigurer configurer) {
		configurer.setUseSuffixPatternMatch(false);
	}
	
	/**
	 * 静态资源不拦截
	 * */
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/statics/**").addResourceLocations("/statics/");
		registry.addResourceHandler("/**/*.html").addResourceLocations("/");
	}
	
	/**
	 * 设置允许跨域访问
	 */
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**");
		super.addCorsMappings(registry);
	}
	
}
