package com.bll.biz.mapper;

import com.bll.base.BaseSqlMapper;
import com.bll.biz.entity.Bookinfo;
import org.apache.ibatis.annotations.Mapper;

/**
 * : bookinfo
 * mapper 层
 */
@Mapper
public interface BookinfoMapper extends BaseSqlMapper<Bookinfo,String> {
	
}

