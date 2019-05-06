package com.bll.base;

import lombok.Data;

import java.util.List;

@Data
public class PageInfo<T extends BaseEntity> {

    public PageInfo(T t){
        this.pageNum = t.getPageNum();
        this.pageSize = t.getPageSize();
    }

    // 集合
    List<T> list;

    // 当前页数
    private Integer pageNum;

    // 每页条数
    private Integer pageSize;

    public void setList(List<T> list) {
        this.list = list;
        this.pageTotal = list.size();
    }

    // 当前页条数
    private Integer pageTotal;

    // 总条数
    private Integer total;
}
