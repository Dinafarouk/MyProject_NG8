import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-elemnt/server-elemnt.component';


// import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    CockpitComponent,
    ServerElementComponent,
    //  ServerComponent,
    //  ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  })
export class AppModule { }
