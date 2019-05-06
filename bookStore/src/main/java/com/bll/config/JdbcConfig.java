package com.bll.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:/jdbc.properties")
public class JdbcConfig {

	@Value("${jdbc.driver}")
	private String driver;

	@Value("${jdbc.url}")
	private String url;

	@Value("${jdbc.username}")
	private String username;

	@Value("${jdbc.password}")
	private String password;

	@Value("${jdbc.initialSize}")
	private int initialSize;

	@Value("${jdbc.minIdle}")
	private int minIdle;

	@Value("${jdbc.maxActive}")
	private int maxActive;

	public String getDriver() {
		return driver;
	}

	public String getUrl() {
		return url;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public int getInitialSize() {
		return initialSize;
	}

	public int getMinIdle() {
		return minIdle;
	}

	public int getMaxActive() {
		return maxActive;
	}
}
