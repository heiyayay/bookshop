package com.bll.biz.service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.math.BigDecimal;

import com.bll.base.BaseService;
import com.bll.base.PageInfo;
import com.bll.biz.mapper.BookinfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bll.biz.entity.Bookinfo;
import org.springframework.util.ObjectUtils;

/**
 * : bookinfo
 * biz 层
 *
 */

@Service("bookinfoService")
public class BookinfoService implements BaseService<Bookinfo, String> {

    @Autowired
    private BookinfoMapper mapper;

    @Override
    public PageInfo<Bookinfo> getPageList(Bookinfo entity) {
        PageInfo<Bookinfo> pageInfo = new PageInfo<>(entity);
        pageInfo.setList(getList(entity));
        pageInfo.setTotal(mapper.getListCount(entity));
        return pageInfo;
    }

    @Override
    public List<Bookinfo> getList(Bookinfo entity) {
        return mapper.getList(entity);
    }

    @Override
    public Bookinfo getById(String id) {
        if (ObjectUtils.isEmpty(id)) {
            return null;
        }
        return mapper.getById(id);
    }

    @Override
    public int insert(Bookinfo entity) {
        return mapper.insert(entity);
    }

    @Override
    public int update(Bookinfo entity) {
        return mapper.update(entity);
    }

    @Override
    public int delete(Bookinfo entity) {
        return mapper.delete(entity);
    }
}