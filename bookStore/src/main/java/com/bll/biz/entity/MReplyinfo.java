package com.bll.biz.entity;
import com.bll.base.BaseEntity;
import com.bll.base.BaseInterfaceEntity;
import lombok.Data;

import java.util.Date;

 /**
 * : m_replyinfo
 * entity 层
 */
 @Data
public class MReplyinfo extends BaseEntity implements BaseInterfaceEntity<Integer> {
	//m_replyid : 留言id
	private Integer mReplyid;

	//m_replycontent : 留言内容
	private String mReplycontent;

	//m_pubid : 留言回复
	private Integer mPubid;

	//m_replydate : 留言回复日期
	private Date mReplydate;


	 @Override
	 public void setId(Integer integer) {
		 this.mReplyid = integer;
	 }

	 @Override
	 public Integer getId() {
		 return this.mReplyid;
	 }
 }
