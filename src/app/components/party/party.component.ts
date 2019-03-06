import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/providers/info/info.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {
  countDown = [5, 4, 3 , 2, 1];

  constructor(public infoProvider: InfoService,) { }

  ngOnInit() {
  }

}
