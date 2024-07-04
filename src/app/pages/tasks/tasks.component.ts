import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'tasks.component.html',
})
export class TasksComponent {
  dataSource: any;
  brazilianCurrency = {
    style: 'currency',
    currency: 'BRL',
    precision: 2,
    
  };

  constructor(httpClient: HttpClient) {

    //FOR SURE THAT THE CODE BELOW SHOULD BE ON SERVICE :)
    httpClient.get('http://localhost:3000/fiis').subscribe({
      next: (res: any) => {
        this.dataSource = res;
      },
      error: (err) => console.error(err),
    });
  }

  percentage(cellInfo: any): string {
    return (cellInfo.value || 0) + '%';
  }
}
