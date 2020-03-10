import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-elemnt',
  templateUrl: './server-elemnt.component.html',
  styleUrls: ['./server-elemnt.component.css'],
  encapsulation: ViewEncapsulation.Emulated//None, Native
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string, content: string };
  constructor() { }

  ngOnInit() {
  }

}

