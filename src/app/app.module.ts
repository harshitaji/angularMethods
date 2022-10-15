import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ListFoodComponent } from './list-food/list-food.component';


@NgModule({
  declarations: [
    AppComponent,
    ListFoodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
