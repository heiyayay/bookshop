import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
import { DashboardV1Component } from './dashboard/v1/v1.component';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { UserLockComponent } from './passport/lock/lock.component';
import { CallbackComponent } from './callback/callback.component';
//首页展示
import { ProListProjectsComponent } from './pro/list/projects/projects.component';
import { ProListDetailComponent } from './pro/list/detail/detail.component';
import { ProListFillpayComponent} from './pro/list/fillpay/fillpay.component'
// 管理员页面
import { ProTableListUComponent } from './pro/list/usertable-list/table-listU.component';
import { ProTableListOComponent } from './pro/list/ordertable-list/table-listO.component';
import { ProTableListBComponent } from './pro/list/booktable-list/table-listB.component';
import { ProTableListMComponent } from './pro/list/messagetable-list/table-listM.component';
const COMPONENTS = [
  DashboardV1Component,
  DashboardAnalysisComponent,
  DashboardMonitorComponent,
  // passport pages
  UserLoginComponent,
  UserRegisterComponent,
  UserRegisterResultComponent,
  // single pages
  UserLockComponent,
  CallbackComponent,
  //普通用户首页展示
  ProListProjectsComponent,
  ProListDetailComponent,
  ProListFillpayComponent,
  //管理员
  ProTableListUComponent,
  ProTableListOComponent,
  ProTableListBComponent,
  ProTableListMComponent

];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT
})
export class RoutesModule {}
