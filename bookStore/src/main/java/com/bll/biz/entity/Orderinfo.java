package com.bll.biz.entity;
import com.bll.base.BaseEntity;
import com.bll.base.BaseInterfaceEntity;

import java.util.Date;

 /**
 * : orderinfo
 * entity 层
 */

public class Orderinfo extends BaseEntity implements BaseInterfaceEntity<Integer> {
	//orderid : 订单号，设为主键、标识列
	private Integer orderid;

	//quantity : 数量
	private String quantity;

	//total : 总价
	private String total;

	//orderdate : 订单日期
	private Date orderdate;

	//userid : 客户号
	private Integer userid;


	 @Override
	 public void setId(Integer integer) {
		 this.orderid=integer;
	 }

	 @Override
	 public Integer getId() {
		 return this.orderid;
	 }
 }
