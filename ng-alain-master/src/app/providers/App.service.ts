/**图书列表service类 */
import { Injectable, NgModule } from '@angular/core';
import { Base_URL } from './CommonConfig';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { BookInfoModel } from '../models/BookInfoModel';

const httpOptions = {
  headers: new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8" })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private queryBookInfoListUrl = Base_URL + '/bookinfo/getPageList';
  private queryBookInfosListUrl = Base_URL + '/bookinfo/getList';
  private addBookInfoListUrl = Base_URL + '/bookinfo/insert';


  // bookinfoModel:BookInfoModel = new BookInfoModel();
  list = [];
  constructor(private http: HttpClient) { }
  //查询图书信息列表
  queryBookInfo(pageNum : number, pageSize: number) {

    let params = new HttpParams()
      .set("pageNum", pageNum.toString())
      .set("pageSize", pageSize.toString());
    let headers = new HttpHeaders()
      .set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    let responseType = "json";
    return this.http.get(this.queryBookInfoListUrl, { headers, params });
  }

  queryBookInfos(bookname,author,publisher){
    let params = new HttpParams()
    .set("bookname", bookname.toString())
    .set("author", author.toString())
    .set("publisher",publisher.toString());
    let headers = new HttpHeaders()
      .set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    let responseType = "json";
    return this.http.get(this.queryBookInfosListUrl, { headers, params });
  }

  addBookInfo(bookinfoModel:BookInfoModel){
    debugger
    let headers = new HttpHeaders()
    .set("Content-Type", "application/json; charset=UTF-8");
    let params = new HttpParams()
    .set("entity",JSON.stringify(bookinfoModel));
    // .set("bookname", bookinfoModel.bookname)
    // .set("isbn",bookinfoModel.isbn)
    // .set("price" ,bookinfoModel.price)
    // .set("author",bookinfoModel.author)
    // .set("publisher",bookinfoModel.publisher)
    // // .set("cateid",bookinfoModel)
    // // .set("userid",bookinfoModel.)
    // .set("imgurl",bookinfoModel.imgurl)
    // .set("publishedate",bookinfoModel.publishedate);

    
    return this.http.post(this.addBookInfoListUrl, { headers, params });
  }

 
}

