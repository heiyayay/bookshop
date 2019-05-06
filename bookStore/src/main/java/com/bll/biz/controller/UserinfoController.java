
package com.bll.biz.controller;

import java.util.List;

import com.bll.base.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import com.bll.biz.service.UserinfoService;
import com.bll.core.util.SessionUtil;
import com.bll.biz.entity.Userinfo;

/**
 * : userinfo
 * controller 层
 *
 */

@Controller
@RequestMapping("/userinfo")
public class UserinfoController {

    @Autowired
    private UserinfoService service;

    @ResponseBody
    @GetMapping("/getPageList")
    public PageInfo<Userinfo> getPageList(Userinfo entity) {
        if (ObjectUtils.isEmpty(entity) || entity.getPageNum() == null || entity.getPageNum() <= 0) {
            throw new RuntimeException("分页信息不正确！");
        }
        return service.getPageList(entity);
    }

    @ResponseBody
    @GetMapping("/getList")
    public Boolean  getList(Userinfo entity) {
        if (ObjectUtils.isEmpty(entity)) {
            entity = new Userinfo();
        }
        entity.setPageNum(null);

        List<Userinfo> list  = service.getList(entity);
        if(list.isEmpty()){
            return false;
        }else{
            SessionUtil.setSessionAttribute("userId",list.get(0).getId());
            return true;
        }
    }

    @GetMapping("/getById/{id}")
    public Userinfo getById(@PathVariable("id") Integer id) {
        return service.getById(id);
    }

    @PostMapping("/insert")
    public int insert(@RequestBody Userinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.insert(entity);
    }

    @PatchMapping("/update/{id}")
    public int update(@PathVariable("id") Integer id, @RequestBody Userinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        entity.setId(id);
        return service.update(entity);
    }

    @DeleteMapping("/delete")
    public int delete(@RequestBody Userinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.update(entity);
    }
}
