import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './v1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardV1Component implements OnInit {
  allChecked = false;
  indeterminate = true;
  checkOptionsOne = [
    { lable :'E', value: 'Apple', checked: true },
    { lable :'M', value: 'orange', checked: false },
    // { lable :'G', value: 'bnana', checked: false },
  ];
  gridStyle1 ={
    width:'30%',
    textAlign:'center',
    border:0
  }
  gridStyle4 ={
    width:'15%',
    // textAlign:'center'
  }
  gridStyle2 ={
    width:'40%',
    textAlign:'center'
  }
  gridStyle3 ={
    width:'15%',
    textAlign:'center'
  }
  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.checkOptionsOne = this.checkOptionsOne.map(item => {
        return {
          ...item,
          checked: true
        };
      });
    } else {
      this.checkOptionsOne = this.checkOptionsOne.map(item => {
        return {
          ...item,
          checked: false
        };
      });
    }
  };

  updateSingleChecked(): void {
    debugger
    if (this.checkOptionsOne.every(item => item.checked === false)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked === true)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  };
  count = 0;
  addCount(): void {
    this.count++;
  }

  minCount(): void {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
  }

  // todoData: any[] = [
  //   {
  //     completed: true,
  //     avatar: '1',
  //     name: '苏先生',
  //     content: `请告诉我，我应该说点什么好？`,
  //   },
  //   {
  //     completed: false,
  //     avatar: '2',
  //     name: 'はなさき',
  //     content: `ハルカソラトキヘダツヒカリ`,
  //   },
  //   {
  //     completed: false,
  //     avatar: '3',
  //     name: 'cipchk',
  //     content: `this world was never meant for one as beautiful as you.`,
  //   },
  //   {
  //     completed: false,
  //     avatar: '4',
  //     name: 'Kent',
  //     content: `my heart is beating with hers`,
  //   },
  //   {
  //     completed: false,
  //     avatar: '5',
  //     name: 'Are you',
  //     content: `They always said that I love beautiful girl than my friends`,
  //   },
  //   {
  //     completed: false,
  //     avatar: '6',
  //     name: 'Forever',
  //     content: `Walking through green fields ，sunshine in my eyes.`,
  //   },
  // ];

  webSite: any[];
  salesData: any[];
  offlineChartData: any[];

  constructor(private http: _HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get('/chart').subscribe((res: any) => {
      this.webSite = res.visitData.slice(0, 10);
      this.salesData = res.salesData;
      this.offlineChartData = res.offlineChartData;
      this.cdr.detectChanges();
    });
  }
}
