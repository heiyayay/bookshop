import { Injectable, NgModule } from '@angular/core';
import { Base_URL } from './CommonConfig';
import { HttpParams, HttpClient, HttpHeaders, } from '@angular/common/http';
import { OrderInfoModel} from '../models/OrderInfoMOdel'

const httpOptions = {
  headers: new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8" })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private queryOrderInfoListUrl = Base_URL + '/orderinfo/getPageList';
  private insertOrderUrl = Base_URL + '/orderinfo/insert';
  list = [];
  constructor(private http: HttpClient,private orderInfoModel :OrderInfoModel) { }
  //查询图书信息列表
  queryBookInfo(pageNum : number, pageSize: number) {

    let params = new HttpParams()
      .set("pageNum", pageNum.toString())
      .set("pageSize", pageSize.toString());
    let headers = new HttpHeaders()
      .set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    let responseType = "json";
    return this.http.get(this.queryOrderInfoListUrl, { headers, params });
  }

  // insertPayment(orderInfoModel:OrderInfoModel){
  //   let params = new HttpParams()
  //   .set("orderInfoModel",orderInfoModel.toString());

  //   let headers = new HttpHeaders()
  //   .set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  //   let responseType = "json";
  //   return this.http.post(this.insertOrderUrl,{headers,params})
  // }
}

