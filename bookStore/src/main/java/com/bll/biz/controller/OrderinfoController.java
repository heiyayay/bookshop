
package com.bll.biz.controller;

import java.util.List;

import com.bll.base.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import com.bll.biz.service.OrderinfoService;
import com.bll.biz.entity.Orderinfo;

/**
 * : orderinfo
 * controller 层
 *
 */

@Controller
@RequestMapping("/orderinfo")
public class OrderinfoController {

    @Autowired
    private OrderinfoService service;

    @ResponseBody
    @GetMapping("/getPageList")
    public PageInfo<Orderinfo> getPageList(Orderinfo entity) {
        if (ObjectUtils.isEmpty(entity) || entity.getPageNum() == null || entity.getPageNum() <= 0) {
            throw new RuntimeException("分页信息不正确！");
        }
        return service.getPageList(entity);
    }

    @ResponseBody
    @GetMapping("/getList")
    public List<Orderinfo> getList(Orderinfo entity) {
        if (ObjectUtils.isEmpty(entity)) {
            entity = new Orderinfo();
        }
        entity.setPageNum(null);
        return service.getList(entity);
    }

    @GetMapping("/getById/{id}")
    public Orderinfo getById(@PathVariable("id") Integer id) {
        return service.getById(id);
    }

    @PostMapping("/insert")
    public int insert(@RequestBody Orderinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.insert(entity);
    }

    @PatchMapping("/update/{id}")
    public int update(@PathVariable("id") Integer id, @RequestBody Orderinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        entity.setId(id);
        return service.update(entity);
    }

    @DeleteMapping("/delete")
    public int delete(@RequestBody Orderinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.update(entity);
    }
}
