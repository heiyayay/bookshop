//
//package com.bll.biz.controller;
//
//import com.bll.base.PageInfo;
//import com.bll.biz.entity.Shopcart;
//import com.bll.biz.service.ShopcartService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.util.ObjectUtils;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//
//
//@Controller
//@RequestMapping("/shopcart")
//public class ShopcartController {
//
//    @Autowired
//    private ShopcartService service;
//
//    @ResponseBody
//    @GetMapping("/getPageList")
//    public PageInfo<Shopcart> getPageList(Shopcart entity) {
//        if (ObjectUtils.isEmpty(entity) || entity.getPageNum() == null || entity.getPageNum() <= 0) {
//            throw new RuntimeException("分页信息不正确！");
//        }
//        return service.getPageList(entity);
//    }
//
//    @ResponseBody
//    @GetMapping("/getList")
//    public List<Shopcart>  getList(Shopcart entity) {
//        if (ObjectUtils.isEmpty(entity)) {
//            entity = new Shopcart();
//        }
//        entity.setPageNum(null);
//
//        List<Shopcart> list  = service.getList(entity);
//       return list ;
//    }
//
//    @GetMapping("/getById/{id}")
//    public Shopcart getById(@PathVariable("id") Integer id) {
//        return service.getById(id);
//    }
//
//    @PostMapping("/insert")
//    public int insert(@RequestBody Shopcart entity) {
//        if (ObjectUtils.isEmpty(entity)){
//            return 0;
//        }
//        return service.insert(entity);
//    }
//
//    @PatchMapping("/update/{id}")
//    public int update(@PathVariable("id") Integer id, @RequestBody Shopcart entity) {
//        if (ObjectUtils.isEmpty(entity)){
//            return 0;
//        }
//        entity.setId(id);
//        return service.update(entity);
//    }
//
////    @DeleteMapping("/delete/{id}")
////    public int delete(@PathVariable("id") Integer id) {
////        if (ObjectUtils.isEmpty(id)){
////            return 0;
////        }
////        return service.deleteById(id);
////    }
//}
