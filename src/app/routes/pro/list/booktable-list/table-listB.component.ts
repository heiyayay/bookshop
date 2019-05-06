import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap, map } from 'rxjs/operators';
import { STComponent, STColumn, STData, STChange } from '@delon/abc';
import { AppService } from '../../../../providers/App.service';
import { BookInfoModel } from '../../../../models/BookInfoModel';
// import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-table-listB',
  templateUrl: './table-listB.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProTableListBComponent implements OnInit {
 
   
  public bookinfoModel : BookInfoModel = new BookInfoModel;
  form: FormGroup;
  page: any = {
    list: [],
    pageNum: 1, 
    pageSize: 10, 
    pageTotal: 0, 
    total: 0
  };

  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder, 
    private appinfoservice : AppService
  ) { }

  ngOnInit(): void {
    this.getBookInfoList();
    this.form = this.fb.group({
      isbn: [null, [Validators.required]],
      bookname: [null, [Validators.required]],
      price: [null, [Validators.required]],
      author: [null, []],
      imgurl: [null, [Validators.required]],
      point: [null, []],
      publisher: [null, []],
      pubdate: [null],
      number: [null, [Validators.required]],
    });
  
  }
  getBookInfoList(){
    this.appinfoservice.queryBookInfo(this.page.pageNum,this.page.pageSize
    ).subscribe(
      rs => {
        console.log(rs);
        //this.data = rs;
        this.page.list = rs['list'];
        this.page.pageSize = rs['pageSize'];
        this.page.pageNum = rs['pageNum'];
        this.page.total = rs['total'];
      }
    );
  }

  pageSizeChange($event){
    console.log('pageSizeChange=>' + $event);
    this.page.pageSize = $event;
    this.page.pageNum = 1;
    this.getBookInfoList();
  }
  pageIndexChange($event){
    console.log('pageIndexChange=>' + $event);
    this.page.pageNum = $event;
    this.getBookInfoList();
  }
//点击添加图书

  add(tpl: TemplateRef<{}>) {
    this.modalSrv.create({
      nzTitle: '新建规则',
      nzContent: tpl,
      nzOnOk: () => {
        console.log(this.form.value);
        // // this.loading = true;
        this.appinfoservice.addBookInfo(this.form.value)
          .subscribe(() => this.getBookInfoList());
      },
    });
  }

  reset() {
    // wait form reset updated finished
    setTimeout(() => this.getBookInfoList());
  }

  //添加图书完毕
  submit():void{
    console.log(this.form.value);
    // debugger
    // this.appinfoservice.addBookInfo(this.bookinfoModel).subscribe(
    //  rs =>{
    //   console.log(rs);
    //  }
    // );
  }
}
