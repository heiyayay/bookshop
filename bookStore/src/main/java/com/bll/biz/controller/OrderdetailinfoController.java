
package com.bll.biz.controller;

import java.util.List;

import com.bll.base.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import com.bll.biz.service.OrderdetailinfoService;
import com.bll.biz.entity.Orderdetailinfo;

/**
 * : orderdetailinfo
 * controller 层
 *
 */

@Controller
@RequestMapping("/orderdetailinfo")
public class OrderdetailinfoController {

    @Autowired
    private OrderdetailinfoService service;

    @ResponseBody
    @GetMapping("/getPageList")
    public PageInfo<Orderdetailinfo> getPageList(Orderdetailinfo entity) {
        if (ObjectUtils.isEmpty(entity) || entity.getPageNum() == null || entity.getPageNum() <= 0) {
            throw new RuntimeException("分页信息不正确！");
        }
        return service.getPageList(entity);
    }

    @ResponseBody
    @GetMapping("/getList")
    public List<Orderdetailinfo> getList(Orderdetailinfo entity) {
        if (ObjectUtils.isEmpty(entity)) {
            entity = new Orderdetailinfo();
        }
        entity.setPageNum(null);
        return service.getList(entity);
    }

    @GetMapping("/getById/{id}")
    public Orderdetailinfo getById(@PathVariable("id") Integer id) {
        return service.getById(id);
    }

    @PostMapping("/insert")
    public int insert(@RequestBody Orderdetailinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.insert(entity);
    }

    @PatchMapping("/update/{id}")
    public int update(@PathVariable("id") Integer id, @RequestBody Orderdetailinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        entity.setId(id);
        return service.update(entity);
    }

    @DeleteMapping("/delete")
    public int delete(@RequestBody Orderdetailinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.update(entity);
    }
}
