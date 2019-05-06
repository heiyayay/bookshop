package com.bll.biz.entity;
import com.bll.base.BaseEntity;
import com.bll.base.BaseInterfaceEntity;
import lombok.Data;

 /**
 * : bookcateinfo
 * entity 层
 */
@Data
public class Bookcateinfo extends BaseEntity implements BaseInterfaceEntity<Integer> {
	//cateid : 种类id
	private Integer cateid;

	//catename : 种类名称
	private String catename;

	 @Override
	 public void setId(Integer i) {
		 this.cateid = i;
	 }

	 @Override
	 public Integer getId() {
		 return this.cateid;
	 }
 }
