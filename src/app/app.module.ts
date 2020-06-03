import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //for ng-model
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule , Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UploadmatComponent } from './uploadmat/uploadmat.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { ProductsearchpageComponent } from './productsearchpage/productsearchpage.component';
import {XploreService} from './xplore.service'

const appRoutes: Routes=[
  {path:'' ,component: SearchpageComponent,  pathMatch: 'full'},
  {path:'upload-material',component: UploadmatComponent},
  {path:'search-page',component: SearchpageComponent},
  {path:'prod-search-page',component: ProductsearchpageComponent},
  //{path:'confirmorder/:id',component: ConfirmorderComponent},
  //{path:'orderdetails',component: OrderdetailsComponent},
  //{path:'menu',component: MenuComponent}
  //{path:'', redirectTo: '/login' ,pathMatch:'full'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadmatComponent,
    SearchpageComponent,
    ProductsearchpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{ useHash: false })
  ],
  providers: [XploreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
