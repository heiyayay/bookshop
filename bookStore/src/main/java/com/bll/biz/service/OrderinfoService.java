package com.bll.biz.service;

import java.util.List;

import com.bll.base.BaseService;
import com.bll.base.PageInfo;
import com.bll.biz.mapper.OrderinfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bll.biz.entity.Orderinfo;
import org.springframework.util.ObjectUtils;

/**
 * : orderinfo
 * biz 层
 *
 */

@Service("orderinfoService")
public class OrderinfoService implements BaseService<Orderinfo, Integer> {

	@Autowired
	private OrderinfoMapper mapper;

	@Override
	public PageInfo<Orderinfo> getPageList(Orderinfo entity) {
		PageInfo<Orderinfo> pageInfo = new PageInfo<>(entity);
		pageInfo.setList(getList(entity));
		pageInfo.setTotal(mapper.getListCount(entity));
		return pageInfo;
	}

	@Override
	public List<Orderinfo> getList(Orderinfo entity) {
		return mapper.getList(entity);
	}

	@Override
	public Orderinfo getById(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			return null;
		}
		return mapper.getById(id);
	}

	@Override
	public int insert(Orderinfo entity) {
		return mapper.insert(entity);
	}

	@Override
	public int update(Orderinfo entity) {
		return mapper.update(entity);
	}

	@Override
	public int delete(Orderinfo entity) {
		return mapper.delete(entity);
	}
}