import { Component, Input } from '@angular/core';

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
  @Input()
  serverElemnts = [{ type: 'server', name: 'TestServer', content: 'Just a test !' }];

  onServerAdded(serverData: { serveName: string, serverContent: string }) {
    this.serverElemnts.push(
      {
        type: 'server',
        name: serverData.serveName,
        content: serverData.serverContent
      }
    );

    console.log("this.serverElemnts", this.serverElemnts);

  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElemnts.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}




    // servers =[];


    // onRemoveServer(id: number) {
    //   const position = id + 1;
    //   this.servers.splice(position, 1);
    // }



  // onAddServer() {
  //   this.servers.push('Another Server');
  // }

  // }




//  name = 'Dina';

//  showSecret = false;
//  log = [];

//  onToggleDetails() {
//    this.showSecret = !this.showSecret;
//    this.log.push(this.log.length + 1);
//  }

