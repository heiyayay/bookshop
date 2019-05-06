package com.bll.biz.service;

import java.util.List;

import com.bll.base.BaseService;
import com.bll.base.PageInfo;
import com.bll.biz.mapper.MReplyinfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bll.biz.entity.MReplyinfo;
import com.bll.biz.entity.MessageDetails;

import org.springframework.util.ObjectUtils;

/**
 * : mReplyinfo
 * biz 层
 *
 */

@Service("mReplyinfoService")
public class MReplyinfoService implements BaseService<MReplyinfo, Integer> {

	@Autowired
	private MReplyinfoMapper mapper;

	@Override
	public PageInfo<MReplyinfo> getPageList(MReplyinfo entity) {
		PageInfo<MReplyinfo> pageInfo = new PageInfo<>(entity);
		pageInfo.setList(getList(entity));
		pageInfo.setTotal(mapper.getListCount(entity));
		return pageInfo;
	}

	@Override
	public List<MReplyinfo> getList(MReplyinfo entity) {
		return mapper.getList(entity);
	}

	@Override
	public MReplyinfo getById(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			return null;
		}
		return mapper.getById(id);
	}

	@Override
	public int insert(MReplyinfo entity) {
		return mapper.insert(entity);
	}

	@Override
	public int update(MReplyinfo entity) {
		return mapper.update(entity);
	}

	@Override
	public int delete(MReplyinfo entity) {
		return mapper.delete(entity);
	}
	
	
	public MessageDetails getDetails(Integer id) {
		   return mapper.getDetails(id);
		}
}