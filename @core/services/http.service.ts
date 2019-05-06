/**
 * Created by zhaotiantian on 2018/11/16.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {RestResponse} from "@core/models/rest-response.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient
    //,private popup:PopupService
  ) {
  }

  /** GET请求处理（一般用于获取数据） **/
  get(url: string, data: any = {},errorFn?:Function): Observable<RestResponse> {
    return this.http.get<RestResponse>(url,data).pipe(
      map(restResponse => {
        return this.callback(restResponse , errorFn);
      }),
      catchError(this.handleError(url, []))
    );
  }

  /** POST请求处理（一般用于保存数据） **/
  post(url: string, data: any = {},httpOptions:any = {}, errorFn?:Function): Observable<RestResponse> {
    return this.http.post<RestResponse>(url, data,httpOptions).pipe(
      map(restResponse => {
        return this.callback(restResponse, errorFn);
      }),
      catchError(this.handleError(url, []))
    );
  }

  /** PUT请求处理（一般用于更新数据） **/
  put(url: string, data: any = {},httpOptions:any = {},errorFn?:Function): Observable<RestResponse> {
    //noinspection TypeScriptValidateTypes
    return this.http.put<RestResponse>(url, data).pipe(
      map(restResponse => {
        return this.callback(restResponse, errorFn);
      }),
      catchError(this.handleError(url, []))
    );
  }

  /** DELETE请求处理（一般用于删除数据） **/
  delete(url: string,data: any = {}, errorFn?:Function): Observable<RestResponse> {
    return this.http.delete<RestResponse>(url,data).pipe(
      map(restResponse => {
        return this.callback(restResponse, errorFn);
      }),
      catchError(this.handleError(url, []))
    );
  }

  callback(restResponse, errorFn?:Function) {
    if(!restResponse){
      //this.popup.error("未获取到数据！");
    }
    // if (restResponse.success) {
    //   // if(!!restResponse.message && restResponse.message.length>0){
    //   //   this.popup.success(restResponse.message);
    //   // }
    //   return restResponse;
    // } else {
    //   if (errorFn) {
    //     errorFn(restResponse);
    //   } else {
    //     //this.popup.error(restResponse.message);
    //   }
    //   return restResponse;
    // }
    return restResponse;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
