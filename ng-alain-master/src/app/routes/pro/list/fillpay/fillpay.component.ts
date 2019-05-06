import { Component, OnInit, OnDestroy, ChangeDetectorRef,TemplateRef, Input } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import {FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { NzMessageService,NzModalService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { $ } from 'protractor';
import { OrderService} from '../../../../providers/Order.service';
import { OrderInfoModel } from '../../../../models/OrderInfoMOdel';

@Component({
  selector: 'app-list-fillpay',
  templateUrl: './fillpay.component.html',
})
export class ProListFillpayComponent implements OnInit, OnDestroy {
  private router$: Subscription;
  list: any[] = [null];
  isVisible = false;
  isConfirmLoading = false;
  loading = true;
  validateForm: FormGroup;
  // @Input()
  // protected orderInfoMOdel: OrderInfoModel;


  tabs: any[] = [

    {
      key: 'projects',
      tab: '书籍展示',
    },
  ];

  pos = 0;


  constructor(private router: Router,
     private http: _HttpClient,
      public msg: NzMessageService,
      private modalSrv: NzModalService, 
      private cdr: ChangeDetectorRef,
      private fb: FormBuilder,
      // private orderInfoModel:OrderInfoModel,
    private orderService : OrderService) { }

  private setActive() {
    const key = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    const idx = this.tabs.findIndex(w => w.key === key);
    if (idx !== -1) this.pos = idx;
  }

  ngOnInit(): void {
    this.loading = true;
    this.http.get('/api/list', { count: 2 }).subscribe((res: any) => {
      this.list = this.list.concat(res);
      this.loading = false;
      this.cdr.detectChanges();
    });
    this.router$ = this.router.events
      .pipe(filter(e => e instanceof ActivationEnd))
      .subscribe(() => this.setActive());
    this.setActive();

    this.validateForm = this.fb.group({
      email            : [ null, [ Validators.email, Validators.required ] ],
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      nickname         : [ null, [ Validators.required ] ],
      phoneNumberPrefix: [ '+86' ],
      phoneNumber      : [ null, [ Validators.required ] ],
      website          : [ null, [ Validators.required ] ],
      captcha          : [ null, [ Validators.required ] ],
      agree            : [ false ]
    });
  
  }

  to(item: any) {
    this.router.navigateByUrl(`/pro/list/${item.key}`);
  }

  ngOnDestroy() {
    this.router$.unsubscribe();
  }

  checkboxClick(event) {
    console.log(event)
    console.log(event.target)
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  pay(){
    this.msg.success('付款成功！');

  }
 
}
