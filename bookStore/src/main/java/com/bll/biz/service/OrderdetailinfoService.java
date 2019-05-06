package com.bll.biz.service;

import java.util.List;

import com.bll.base.BaseService;
import com.bll.base.PageInfo;
import com.bll.biz.mapper.OrderdetailinfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bll.biz.entity.Orderdetailinfo;
import org.springframework.util.ObjectUtils;

/**
 * : orderdetailinfo
 * biz 层
 *
 */

@Service("orderdetailinfoService")
public class OrderdetailinfoService implements BaseService<Orderdetailinfo, Integer> {

	@Autowired
	private OrderdetailinfoMapper mapper;

	@Override
	public PageInfo<Orderdetailinfo> getPageList(Orderdetailinfo entity) {
		PageInfo<Orderdetailinfo> pageInfo = new PageInfo<>(entity);
		pageInfo.setList(getList(entity));
		pageInfo.setTotal(mapper.getListCount(entity));
		return pageInfo;
	}

	@Override
	public List<Orderdetailinfo> getList(Orderdetailinfo entity) {
		return mapper.getList(entity);
	}

	@Override
	public Orderdetailinfo getById(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			return null;
		}
		return mapper.getById(id);
	}

	@Override
	public int insert(Orderdetailinfo entity) {
		return mapper.insert(entity);
	}

	@Override
	public int update(Orderdetailinfo entity) {
		return mapper.update(entity);
	}

	@Override
	public int delete(Orderdetailinfo entity) {
		return mapper.delete(entity);
	}
}