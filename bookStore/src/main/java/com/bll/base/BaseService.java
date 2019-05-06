package com.bll.base;


import java.util.List;

/**
 * 
* @ClassName: BaseBiz 
* @Description: 业务层基础类
*
 */
public interface BaseService<T extends BaseEntity, E>{

	PageInfo<T> getPageList(T t);

	List<T> getList(T t);

	T getById(E e);

	int insert(T t);

	int update(T t);

	int delete(T t);
}
