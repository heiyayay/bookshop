
package com.bll.biz.controller;

import java.util.List;

import com.bll.base.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import com.bll.biz.service.BookcateinfoService;
import com.bll.biz.entity.Bookcateinfo;

/**
 * : bookcateinfo
 * controller 层
 *
 */

@Controller
@RequestMapping("/bookcateinfo")
public class BookcateinfoController {

    @Autowired
    private BookcateinfoService service;

    @ResponseBody
    @GetMapping("/getPageList")
    public PageInfo<Bookcateinfo> getPageList(Bookcateinfo entity) {
        if (ObjectUtils.isEmpty(entity) || entity.getPageNum() == null || entity.getPageNum() <= 0) {
            throw new RuntimeException("分页信息不正确！");
        }
        return service.getPageList(entity);
    }

    @ResponseBody
    @GetMapping("/getList")
    public List<Bookcateinfo> getList(Bookcateinfo entity) {
        if (ObjectUtils.isEmpty(entity)) {
            entity = new Bookcateinfo();
        }
        entity.setPageNum(null);
        return service.getList(entity);
    }

    @GetMapping("/getById/{id}")
    public Bookcateinfo getById(@PathVariable("id") Integer id) {
        return service.getById(id);
    }

    @PostMapping("/insert")
    public int insert(@RequestBody Bookcateinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.insert(entity);
    }

    @PatchMapping("/update/{id}")
    public int update(@PathVariable("id") Integer id, @RequestBody Bookcateinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        entity.setId(id);
        return service.update(entity);
    }

    @DeleteMapping("/delete")
    public int delete(@RequestBody Bookcateinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.update(entity);
    }
}
