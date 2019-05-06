package com.bll.biz.service;

import java.util.List;

import com.bll.base.BaseService;
import com.bll.base.PageInfo;
import com.bll.biz.mapper.BookcateinfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bll.biz.entity.Bookcateinfo;
import org.springframework.util.ObjectUtils;

/**
 * : bookcateinfo
 * biz 层
 *
 */

@Service("bookcateinfoService")
public class BookcateinfoService implements BaseService<Bookcateinfo, Integer> {

	@Autowired
	private BookcateinfoMapper mapper;

	@Override
	public PageInfo<Bookcateinfo> getPageList(Bookcateinfo entity) {
		PageInfo<Bookcateinfo> pageInfo = new PageInfo<>(entity);
		pageInfo.setList(getList(entity));
		pageInfo.setTotal(mapper.getListCount(entity));
		return pageInfo;
	}

	@Override
	public List<Bookcateinfo> getList(Bookcateinfo entity) {
		return mapper.getList(entity);
	}

	@Override
	public Bookcateinfo getById(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			return null;
		}
		return mapper.getById(id);
	}

	@Override
	public int insert(Bookcateinfo entity) {
		return mapper.insert(entity);
	}

	@Override
	public int update(Bookcateinfo entity) {
		return mapper.update(entity);
	}

	@Override
	public int delete(Bookcateinfo entity) {
		return mapper.delete(entity);
	}
}