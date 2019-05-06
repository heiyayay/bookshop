/**
 * Created by zhaotiantian on 2018/11/16.
 */
export class RestResponse {

  public id:string;

  /**
   * 操作成功、失败的消息
   * @type {string}
   */
  public message:string='操作失败！';

  /**
   * 是否执行成功
   * @type {boolean}
   */
  public success:boolean=false;

  /**
   * 响应代码
   * @type {number}
   */
  public code:string="99999";

  /**
   * 业务数据
   */
  public result:any;
}
