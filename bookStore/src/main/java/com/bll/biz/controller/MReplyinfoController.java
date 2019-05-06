
package com.bll.biz.controller;

import java.util.List;

import com.bll.base.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import com.bll.biz.service.MReplyinfoService;
import com.bll.biz.entity.MReplyinfo;
import com.bll.biz.entity.MessageDetails;

/**
 * : mReplyinfo
 * controller 层
 *
 */

@Controller
@RequestMapping("/mReplyinfo")
public class MReplyinfoController {

    @Autowired
    private MReplyinfoService service;

    @ResponseBody
    @GetMapping("/getPageList")
    public PageInfo<MReplyinfo> getPageList(MReplyinfo entity) {
        if (ObjectUtils.isEmpty(entity) || entity.getPageNum() == null || entity.getPageNum() <= 0) {
            throw new RuntimeException("分页信息不正确！");
        }
        return service.getPageList(entity);
    }

    @ResponseBody
    @GetMapping("/getList")
    public List<MReplyinfo> getList(MReplyinfo entity) {
        if (ObjectUtils.isEmpty(entity)) {
            entity = new MReplyinfo();
        }
        entity.setPageNum(null);
        return service.getList(entity);
    }

    @GetMapping("/getById/{id}")
    public MReplyinfo getById(@PathVariable("id") Integer id) {
        return service.getById(id);
    }

    @PostMapping("/insert")
    public int insert(@RequestBody MReplyinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.insert(entity);
    }

    @PatchMapping("/update/{id}")
    public int update(@PathVariable("id") Integer id, @RequestBody MReplyinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        entity.setId(id);
        return service.update(entity);
    }

    @DeleteMapping("/delete")
    public int delete(@RequestBody MReplyinfo entity) {
        if (ObjectUtils.isEmpty(entity)){
            return 0;
        }
        return service.update(entity);
    }
    
    @ResponseBody
    @GetMapping("/getDetails/{id}")
    public MessageDetails getDetails(@PathVariable("id") Integer id) {
    	MessageDetails entity = service.getDetails(id);
//        return service.getDetails(id);
    	return entity;
    }
}
