import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//   styles: [`
//   h3 {
//     color: dodgerblue;
//   }
// `]
})
export class AppComponent {
  servers =[];

  // onAddServer() {
  //   this.servers.push('Another Server');
  // }

  onRemoveServer(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1);
  }




  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}







//  name = 'Dina';

//  showSecret = false;
//  log = [];

//  onToggleDetails() {
//    this.showSecret = !this.showSecret;
//    this.log.push(this.log.length + 1);
//  }


