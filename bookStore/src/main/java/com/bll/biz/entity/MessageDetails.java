package com.bll.biz.entity;

import lombok.Data;

import java.util.Date;

/**
 * : messageinfo
 * entity 层
 * 查看留言详情
 */
@Data
public class MessageDetails   {
	//m_pubid : 留言回复id
	private Integer mPubid;

	//m_pubcontent : 留言回复内容
	private String mPubcontent;

	//m_pubdate : 留言回复日期
	private Date mPubdate;

	//m_replyid : 留言id
	private Integer mReplyid;

	//m_replycontent : 留言内容
	private String mReplycontent;

	//m_replydate : 留言回复日期
	private Date mReplydate;


}
