package com.bll.base;

import java.util.List;

/**
 * @ClassName: BaseSqlMapper
 * @Description: Mapper根抽象接口
 */
public interface BaseSqlMapper<T, E> {
    List<T> getList(T t);

    int getListCount(T t);

    T getById(E e);

    int insert(T t);

    int update(T t);

    int delete(T t);
}