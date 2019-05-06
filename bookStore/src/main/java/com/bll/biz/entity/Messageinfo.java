package com.bll.biz.entity;
import java.util.Date;

import com.bll.base.BaseEntity;
import com.bll.base.BaseInterfaceEntity;
import lombok.Data;

/**
 * : messageinfo
 * entity 层
 */
@Data
public class Messageinfo   extends BaseEntity implements BaseInterfaceEntity<Integer> {
	//m_pubid : 留言回复id
	private Integer mPubid;

	//m_pubcontent : 留言回复内容
	private String mPubcontent;

	//m_pubdate : 留言回复日期
	private Date mPubdate;


	@Override
	public void setId(Integer integer) {
		this.mPubid = integer;
	}

	@Override
	public Integer getId() {
		return this.mPubid;
	}
}
