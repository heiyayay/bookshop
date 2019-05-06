package com.bll.base;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * : bookinfo
 * entity 层
 */
@Data
public class BaseEntity implements Serializable {

	// 排序
	private String orderStr;

	// 当前页数
	private Integer pageNum;

	// 每页条数
	private Integer pageSize = 10;

	public void setPageNum(Integer pageNum) {
		this.pageNum = pageNum;
		if(this.pageNum != null){
			limit = (this.pageNum-1)*this.pageSize +","+this.pageSize;
		}
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
		if(this.pageNum != null){
			limit = (this.pageNum-1)*this.pageSize +","+this.pageSize;
		}
	}

	// 分页
	private String limit;

}
