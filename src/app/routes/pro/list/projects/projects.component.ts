import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { AppService } from '../../../../providers/App.service';
import { OrderInfoModel } from '../../../../models/OrderInfoMOdel';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-list-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProListProjectsComponent implements OnInit {
  q: any = {
    ps: 8,
    owners: ['zxx'],
  };
  selectedOption:any;
  authorSelectedOption:any = '';
  nameSelectedOption:any = '';
  pubSelectedOption:any = '';
  page: any = [];
  text:any;
  list: any[] = [];
  loading = true;
  protected keyWord: string;
  validateForm: FormGroup;
  bookname;
  publisher;
  author;

  constructor(private http: _HttpClient, public msg: NzMessageService, private cdr: ChangeDetectorRef, private appinfoservice : AppService,) {}

  ngOnInit() {
    this.getBookInfoList('','','');

  }


  getBookInfoList(bookname,author,publisher){
    this.appinfoservice.queryBookInfos(bookname,author,publisher).subscribe(
      mg => {
        console.log(mg);
        this.page = mg;     
      }
    );
  }
 
  searchData(){
    
    if(this.nameSelectedOption != '' && this.nameSelectedOption != null){
      this.bookname = this.nameSelectedOption;
    }else{
      this.bookname =''
    }
    if( this.authorSelectedOption != '' && this.authorSelectedOption != null){
      this.author = this.authorSelectedOption;
    }else{
      this.author =''
    }
    if(this.pubSelectedOption != '' && this.pubSelectedOption != null){
      this.publisher = this.pubSelectedOption;
    }else{
      this.publisher =''
    }
    this.getBookInfoList(this.bookname,this.author,this.publisher)
  }
 
}
