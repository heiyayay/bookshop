import { Component, ChangeDetectionStrategy } from '@angular/core';
import { distanceInWords } from 'date-fns';

@Component({
  // selector: 'nz-demo-comment-editor',
  selector: 'app-dashboard-monitor',
  templateUrl: './monitor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./monitor.component.less'],
})
export class DashboardMonitorComponent {
  data: any[] = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    // TODO 存储数据库--subscribe {
      
      this.submitting = false;
      this.data = [...this.data, {
        ...this.user,
        content,
        datetime: new Date(),
        displayTime: distanceInWords(new Date(), new Date())
      }].map(e => {
        return {
          ...e,
          displayTime: distanceInWords(new Date(), e.datetime)
        };
      });
    // }
    // setTimeout(() => {
    // }, 800);
  }

}