
package com.bll.biz.controller;

import java.util.List;

import com.bll.base.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import com.bll.biz.service.MessageinfoService;
import com.bll.biz.entity.Messageinfo;

/**
 * : messageinfo
 * controller 层
 *
 */

@Controller
@RequestMapping("/messageinfo")
public class MessageinfoController {

    @Autowired
    private MessageinfoService service;

    @ResponseBody
    @GetMapping("/getPageList")
    public PageInfo<Messageinfo> getPageList(Messageinfo entity) {
        if (ObjectUtils.isEmpty(entity) || entity.getPageNum() == null || entity.getPageNum() <= 0) {
            throw new RuntimeException("分页信息不正确！");
        }
        return service.getPageList(entity);
    }

    @ResponseBody
    @GetMapping("/getList")
    public List<Messageinfo> getList(Messageinfo entity) {
        if (ObjectUtils.isEmpty(entity)) {
            entity = new Messageinfo();
        }
        entity.setPageNum(null);
        return service.getList(entity);
    }

    @GetMapping("/getById/{id}")
    public Messageinfo getById(@PathVariable("id") Integer id) {
        return service.getById(id);
    }

    @PostMapping("/insert")
    public int insert(@RequestBody Messageinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.insert(entity);
    }

    @PatchMapping("/update/{id}")
    public int update(@PathVariable("id") Integer id, @RequestBody Messageinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        entity.setId(id);
        return service.update(entity);
    }

    @DeleteMapping("/delete")
    public int delete(@RequestBody Messageinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.update(entity);
    }
}
