package com.bll.biz.entity;
import com.bll.base.BaseEntity;
import com.bll.base.BaseInterfaceEntity;
import lombok.Data;

/**
 * : orderdetailinfo
 * entity 层
 */
@Data
public class Orderdetailinfo extends BaseEntity implements BaseInterfaceEntity<Integer> {
	//orderdetailid : 详细订单号，和客户号一起设为主键、标识列
	private Integer orderid;

	//userid : 客户号
	private Integer userid;

	//ISBN : 书号
	private String isbn;

	//quantity : 数量
	private String quantity;

	//total : 小计
	private String total;
	//配送地址
	private String address;
	//下单日期
	private String orderdate;


	@Override
	public void setId(Integer integer) {
		this.orderid = integer;
	}

	@Override
	public Integer getId() {
		return this.orderid;
	}
}
