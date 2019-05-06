//package com.bll.biz.service;
//
//import com.bll.base.BaseService;
//import com.bll.base.PageInfo;
//import com.bll.biz.entity.Shopcart;
//import com.bll.biz.mapper.ShopcartMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.util.ObjectUtils;
//
//import java.util.List;
//
//
//@Service("shopcartService")
//public class ShopcartService implements BaseService<Shopcart, Integer> {
//
//	@Autowired
//	private ShopcartMapper mapper;
//
//	@Override
//	public PageInfo<Shopcart> getPageList(Shopcart entity) {
//		PageInfo<Shopcart> pageInfo = new PageInfo<>(entity);
//		pageInfo.setList(getList(entity));
//		pageInfo.setTotal(mapper.getListCount(entity));
//		return pageInfo;
//	}
//
//	@Override
//	public List<Shopcart> getList(Shopcart entity) {
//		return mapper.getList(entity);
//	}
//
//	@Override
//	public Shopcart getById(Integer id) {
//		if (ObjectUtils.isEmpty(id)) {
//			return null;
//		}
//		return mapper.getById(id);
//	}
//
//	@Override
//	public int insert(Shopcart entity) {
//		return mapper.insert(entity);
//	}
//
//	@Override
//	public int update(Shopcart entity) {
//		return mapper.update(entity);
//	}
//
////	@Override
////	public int deleteById(Integer id) {
////		return mapper.deleteById(id);
////	}
//}