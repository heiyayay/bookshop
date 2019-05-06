package com.bll.biz.service;

import java.util.List;

import com.bll.base.BaseService;
import com.bll.base.PageInfo;
import com.bll.biz.mapper.MessageinfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bll.biz.entity.Messageinfo;
import org.springframework.util.ObjectUtils;

/**
 * : messageinfo
 * biz 层
 *
 */

@Service("messageinfoService")
public class MessageinfoService implements BaseService<Messageinfo, Integer> {

	@Autowired
	private MessageinfoMapper mapper;

	@Override
	public PageInfo<Messageinfo> getPageList(Messageinfo entity) {
		PageInfo<Messageinfo> pageInfo = new PageInfo<>(entity);
		pageInfo.setList(getList(entity));
		pageInfo.setTotal(mapper.getListCount(entity));
		return pageInfo;
	}

	@Override
	public List<Messageinfo> getList(Messageinfo entity) {
		return mapper.getList(entity);
	}

	@Override
	public Messageinfo getById(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			return null;
		}
		return mapper.getById(id);
	}

	@Override
	public int insert(Messageinfo entity) {
		return mapper.insert(entity);
	}

	@Override
	public int update(Messageinfo entity) {
		return mapper.update(entity);
	}

	@Override
	public int delete(Messageinfo entity) {
		return mapper.delete(entity);
	}
}