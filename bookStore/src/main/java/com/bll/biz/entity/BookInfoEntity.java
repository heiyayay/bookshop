package com.bll.biz.entity;

public class BookInfoEntity {

		//书名
		private String bookname;
		//书号
		private String ISBN;
		//价格
		private String price;
		//作者
		private String author;
		//出版社
		private String publisher;
		//分类号
		private String cateid;
		//管理员号
		private String userid;
		//展示图片路径
		private String imgurl;
		//出版日期
		private String publisheDate;
		public String getBookname() {
			return bookname;
		}
		public void setBookname(String bookname) {
			this.bookname = bookname;
		}
		public String getISBN() {
			return ISBN;
		}
		public void setISBN(String iSBN) {
			ISBN = iSBN;
		}
		public String getPrice() {
			return price;
		}
		public void setPrice(String price) {
			this.price = price;
		}
		public String getAuthor() {
			return author;
		}
		public void setAuthor(String author) {
			this.author = author;
		}
		public String getPublisher() {
			return publisher;
		}
		public void setPublisher(String publisher) {
			this.publisher = publisher;
		}
		public String getCateid() {
			return cateid;
		}
		public void setCateid(String cateid) {
			this.cateid = cateid;
		}
		public String getUserid() {
			return userid;
		}
		public void setUserid(String userid) {
			this.userid = userid;
		}
		public String getImgurl() {
			return imgurl;
		}
		public void setImgurl(String imgurl) {
			this.imgurl = imgurl;
		}
		public String getPublisheDate() {
			return publisheDate;
		}
		public void setPublisheDate(String publisheDate) {
			this.publisheDate = publisheDate;
		}
		

}
