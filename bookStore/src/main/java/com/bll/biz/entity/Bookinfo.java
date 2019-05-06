package com.bll.biz.entity;
import java.util.Date;

import com.bll.base.BaseEntity;
import com.bll.base.BaseInterfaceEntity;
import lombok.Data;

/**
 * : bookinfo
 * entity 层
 */
@Data
public class Bookinfo extends BaseEntity implements BaseInterfaceEntity<String> {
	//bookname : 书名
	private String bookname;

	//ISBN : 书号
	private String isbn;

	//price : 价格
	private String price;

	//author : 作者
	private String author;

	//publisher : 出版社
	private String publisher;

	//cate : 种类
	private String cate;

	//userid : 管理员id
	private Integer userid;

	//imgurl : 展示图片路径
	private String imgurl;

	//publisheDate : 出版日期
	private Date publishDate;
	
	//number : 图书数量
	private Integer number;
	
	//point : 图书描述
	private String point;

	@Override
	public void setId(String s) {
		this.isbn = s;
	}

	@Override
	public String getId() {
		return this.isbn;
	}
}
