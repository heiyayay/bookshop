import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { ProRoutingModule } from './pro-routing.module';

import { ProBasicListComponent } from './list/basic-list/basic-list.component';
import { ProListLayoutComponent } from './list/list/list.component';
import { ProListProjectsComponent } from './list/projects/projects.component';
import { ProProfileBaseComponent } from './profile/basic/basic.component';
import { ProProfileAdvancedComponent } from './profile/advanced/advanced.component';
import { ProResultSuccessComponent } from './result/success/success.component';
import { ProResultFailComponent } from './result/fail/fail.component';
import { ProAccountCenterComponent } from './account/center/center.component';
import { ProAccountCenterArticlesComponent } from './account/center/articles/articles.component';
import { ProAccountCenterApplicationsComponent } from './account/center/applications/applications.component';
import { ProTableListUComponent } from './list/usertable-list/table-listU.component';
import { ProAccountCenterProjectsComponent } from './account/center/projects/projects.component';
import { ProAccountSettingsComponent } from './account/settings/settings.component';
import { ProAccountSettingsBaseComponent } from './account/settings/base/base.component';
import { ProAccountSettingsSecurityComponent } from './account/settings/security/security.component';
import { ProAccountSettingsBindingComponent } from './account/settings/binding/binding.component';
import { ProAccountSettingsNotificationComponent } from './account/settings/notification/notification.component';
import { ProBasicListEditComponent } from './list/basic-list/edit/edit.component';
import {ProListDetailComponent} from'./list/detail/detail.component';
import { ProListFillpayComponent } from './list/fillpay/fillpay.component';

const COMPONENTS = [
  ProBasicListComponent,
  ProListLayoutComponent,
  ProListProjectsComponent,
  ProProfileBaseComponent,
  ProProfileAdvancedComponent,
  ProResultSuccessComponent,
  ProResultFailComponent,
  ProAccountCenterComponent,
  ProAccountCenterArticlesComponent,
  ProAccountCenterProjectsComponent,
  ProAccountCenterApplicationsComponent,
  ProAccountSettingsComponent,
  ProAccountSettingsBaseComponent,
  ProAccountSettingsSecurityComponent,
  ProAccountSettingsBindingComponent,
  ProAccountSettingsNotificationComponent,
  ProListDetailComponent,
  ProTableListUComponent,
  ProListFillpayComponent
];

const COMPONENTS_NOROUNT = [
  ProBasicListEditComponent
];

@NgModule({
  imports: [SharedModule, ProRoutingModule],
  declarations: [ ...COMPONENTS, ...COMPONENTS_NOROUNT ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class ProModule {}
