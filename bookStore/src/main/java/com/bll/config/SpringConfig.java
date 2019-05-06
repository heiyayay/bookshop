package com.bll.config;

import java.io.IOException;

import javax.sql.DataSource;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.mapper.MapperScannerConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import com.alibaba.druid.pool.DruidDataSource;

/**
 * spring配置文件
 */
@Configuration
@EnableAspectJAutoProxy(proxyTargetClass = true)
@ComponentScan(basePackages = { "com.bll.**.service" })
@PropertySource(value={"classpath:jdbc.properties"})
@Import(JdbcConfig.class)
public class SpringConfig {
	
	
	/**
	 * 设置数据源
	 * */
	@Bean(name = "dataSource", destroyMethod = "close", initMethod = "init")
	public DataSource dataSource(JdbcConfig jdbc) {
		System.out.println("数据库配置");
		DruidDataSource dataSource = new DruidDataSource();
		dataSource.setDriverClassName(jdbc.getDriver());
		dataSource.setUrl(jdbc.getUrl());
		dataSource.setUsername(jdbc.getUsername());
		dataSource.setPassword(jdbc.getPassword());

		dataSource.setMinIdle(jdbc.getMinIdle());
		dataSource.setInitialSize(jdbc.getInitialSize());
		dataSource.setMaxActive(jdbc.getMaxActive());
		return dataSource;
	}

	/**
	 * 配置整合mybatis
	 * */
	@Bean
	public SqlSessionFactoryBean sqlSessionFactory(DataSource dataSource) throws IOException {
		PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
		sqlSessionFactoryBean.setDataSource(dataSource);
		//sqlSessionFactoryBean.setConfigLocation(resolver.getResource("classpath:mybatis-config.xml"));
		sqlSessionFactoryBean.setMapperLocations(resolver.getResources("classpath*:com/bll/**/mapper/*.xml"));
		return sqlSessionFactoryBean;
	}
	@Bean
	public MapperScannerConfigurer mapperScannerConfigurer() {
		MapperScannerConfigurer mapperScannerConfigurer = new MapperScannerConfigurer();
		mapperScannerConfigurer.setSqlSessionFactoryBeanName("sqlSessionFactory");
		mapperScannerConfigurer.setBasePackage("com.bll.**.mapper");
		return mapperScannerConfigurer;
	}

}
