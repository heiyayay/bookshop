package com.bll.biz.entity;

import com.bll.base.BaseEntity;
import com.bll.base.BaseInterfaceEntity;

/**
 * : userinfo
 * entity 层
 * @author henry
 */

public class Userinfo  extends BaseEntity implements BaseInterfaceEntity<Integer> {
	//userid : 用户编号，设为主键和标识列
	private Integer userid;

	//username : 用户名
	private String username;

	//password : 密码
	private String password;

	//power : 权限
	private String power;

	//email : 邮箱
	private String email;

	//telphone : 手机号
	private String telphone;

	//address : 地址
	private String address;

	//idcard : 身份证号
	private String idcard;


	@Override
	public void setId(Integer integer) {
		this.userid = integer;
	}

	@Override
	public Integer getId() {
		return this.userid;
	}
}
