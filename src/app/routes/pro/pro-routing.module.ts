import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProBasicListComponent } from './list/basic-list/basic-list.component';
import { ProListProjectsComponent } from './list/projects/projects.component';
import { ProProfileBaseComponent } from './profile/basic/basic.component';
import { ProProfileAdvancedComponent } from './profile/advanced/advanced.component';
import { ProResultSuccessComponent } from './result/success/success.component';
import { ProTableListUComponent } from './list/usertable-list/table-listU.component';
import { ProResultFailComponent } from './result/fail/fail.component';
import { ProListLayoutComponent } from './list/list/list.component';
import { ProAccountCenterComponent } from './account/center/center.component';
import { ProAccountCenterArticlesComponent } from './account/center/articles/articles.component';
import { ProAccountCenterApplicationsComponent } from './account/center/applications/applications.component';
import { ProAccountCenterProjectsComponent } from './account/center/projects/projects.component';
import { ProAccountSettingsComponent } from './account/settings/settings.component';
import { ProAccountSettingsBaseComponent } from './account/settings/base/base.component';
import { ProAccountSettingsSecurityComponent } from './account/settings/security/security.component';
import { ProAccountSettingsBindingComponent } from './account/settings/binding/binding.component';
import { ProAccountSettingsNotificationComponent } from './account/settings/notification/notification.component';
import{ProListDetailComponent} from './list/detail/detail.component';
import { ProListFillpayComponent } from './list/fillpay/fillpay.component';
import { ProTableListMComponent } from './list/messagetable-list/table-listM.component';
import { ProTableListOComponent } from './list/ordertable-list/table-listO.component';
import { ProTableListBComponent } from './list/booktable-list/table-listB.component';
const routes: Routes = [
 
  {
    path: 'list',
    children: [
      { path: 'basic-list', component: ProBasicListComponent },
      { path: 'usertable-list', component: ProTableListUComponent },
      { path: 'messagetable-list', component: ProTableListMComponent },
      { path: 'ordertable-list', component: ProTableListOComponent },
      { path: 'booktable-list', component: ProTableListBComponent },
      // {path:'detail',component:ProListDetailComponent}
      {
        path: '',
        component: ProListLayoutComponent,
        children: [
          { 
            path: 'projects',
            component: ProListProjectsComponent,
            children:[
              {path:'detail',component:ProListDetailComponent},
              {path:'fillpay',component:ProListFillpayComponent}
            ] 
          },

        ],
      },

    ],
  },
  {
    path: 'profile',
    children: [
      { path: 'basic', component: ProProfileBaseComponent },
      { path: 'advanced', component: ProProfileAdvancedComponent },
    ],
  },
  {
    path: 'result',
    children: [
      { path: 'success', component: ProResultSuccessComponent },
      { path: 'fail', component: ProResultFailComponent },
    ],
  },
  {
    path: 'account',
    children: [
      {
        path: 'center',
        component: ProAccountCenterComponent,
        children: [
          { path: '', redirectTo: 'articles', pathMatch: 'full' },
          {
            path: 'articles',
            component: ProAccountCenterArticlesComponent,
            data: { titleI18n: 'pro-account-center' },
          },
          {
            path: 'projects',
            component: ProAccountCenterProjectsComponent,
            data: { titleI18n: 'pro-account-center' },
          },
          {
            path: 'applications',
            component: ProAccountCenterApplicationsComponent,
            data: { titleI18n: 'pro-account-center' },
          },
        ],
      },
      {
        path: 'settings',
        component: ProAccountSettingsComponent,
        children: [
          { path: '', redirectTo: 'base', pathMatch: 'full' },
          {
            path: 'base',
            component: ProAccountSettingsBaseComponent,
            data: { titleI18n: 'pro-account-settings' },
          },
          {
            path: 'security',
            component: ProAccountSettingsSecurityComponent,
            data: { titleI18n: 'pro-account-settings' },
          },
          {
            path: 'binding',
            component: ProAccountSettingsBindingComponent,
            data: { titleI18n: 'pro-account-settings' },
          },
          {
            path: 'notification',
            component: ProAccountSettingsNotificationComponent,
            data: { titleI18n: 'pro-account-settings' },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProRoutingModule {}
