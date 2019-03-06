import { Component } from '@angular/core';
import { InfoService } from './providers/info/info.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bongo-drums',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-fudamentals';
  acceptHeader;

  constructor(public infoProvider: InfoService, private http: HttpClient,) {
    this.http.get('http://httpbin.org/get').toPromise().then((val: any) => {
      console.log(val);
      this.acceptHeader = val.headers.Accept;
    });
  }
}
