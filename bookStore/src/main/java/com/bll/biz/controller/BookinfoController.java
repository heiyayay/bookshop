
package com.bll.biz.controller;

import java.util.List;

import com.bll.base.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import com.bll.biz.service.BookinfoService;
import com.bll.biz.entity.Bookinfo;

/**
 * : bookinfo
 * controller 层
 *
 */

@Controller
@RequestMapping("/bookinfo")
public class BookinfoController {

    @Autowired
    private BookinfoService service;

    @ResponseBody
    @GetMapping("/getPageList")
    public PageInfo<Bookinfo> getPageList(Bookinfo entity) {
        if (ObjectUtils.isEmpty(entity) || entity.getPageNum() == null || entity.getPageNum() <= 0) {
            throw new RuntimeException("分页信息不正确！");
        }
        return service.getPageList(entity);
    }

    @ResponseBody
    @GetMapping("/getList")
    public List<Bookinfo> getList(Bookinfo entity) {
        if (ObjectUtils.isEmpty(entity)) {
            entity = new Bookinfo();
        }
        entity.setPageNum(null);
        List<Bookinfo> list = service.getList(entity);
        return list;
    }

    @GetMapping("/getById/{id}")
    public Bookinfo getById(@PathVariable("id") String id) {
        return service.getById(id);
    }

    @PostMapping("/insert")
    public int insert(@RequestBody Bookinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.insert(entity);
    }

    @PatchMapping("/update/{id}")
    public int update(@PathVariable("id") String id, @RequestBody Bookinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        entity.setId(id);
        return service.update(entity);
    }

    @DeleteMapping("/delete")
    public int delete(@RequestBody Bookinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.update(entity);
    }
}
