package com.bll.biz.service;

import java.util.List;

import com.bll.base.BaseService;
import com.bll.base.PageInfo;
import com.bll.biz.mapper.UserinfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bll.biz.entity.Userinfo;
import org.springframework.util.ObjectUtils;

/**
 * : userinfo
 * biz 层
 *
 */

@Service("userinfoService")
public class UserinfoService implements BaseService<Userinfo, Integer> {

	@Autowired
	private UserinfoMapper mapper;

	@Override
	public PageInfo<Userinfo> getPageList(Userinfo entity) {
		PageInfo<Userinfo> pageInfo = new PageInfo<>(entity);
		pageInfo.setList(getList(entity));
		pageInfo.setTotal(mapper.getListCount(entity));
		return pageInfo;
	}

	@Override
	public List<Userinfo> getList(Userinfo entity) {
		return mapper.getList(entity);
	}

	@Override
	public Userinfo getById(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			return null;
		}
		return mapper.getById(id);
	}

	@Override
	public int insert(Userinfo entity) {
		return mapper.insert(entity);
	}

	@Override
	public int update(Userinfo entity) {
		return mapper.update(entity);
	}

	@Override
	public int delete(Userinfo entity) {
		return mapper.delete(entity);
	}
}