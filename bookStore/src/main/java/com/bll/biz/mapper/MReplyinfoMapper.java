package com.bll.biz.mapper;

import com.bll.base.BaseSqlMapper;
import com.bll.biz.entity.MReplyinfo;
import com.bll.biz.entity.MessageDetails;

/**
 * : m_replyinfo
 * mapper 层
 * @author henry
 */

public interface MReplyinfoMapper extends BaseSqlMapper<MReplyinfo,Integer>  {
	
	MessageDetails getDetails(Integer id);
	
}

