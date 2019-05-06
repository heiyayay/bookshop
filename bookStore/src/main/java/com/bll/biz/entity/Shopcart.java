package com.bll.biz.entity;

import com.bll.base.BaseEntity;
import com.bll.base.BaseInterfaceEntity;



public class Shopcart extends BaseEntity implements BaseInterfaceEntity<Integer> {

	private Integer userid;


	private String isbn;


	private Integer quantity;


	@Override
	public void setId(Integer integer) {
		this.userid = integer;
	}

	@Override
	public Integer getId() {
		return this.userid;
	}
}
