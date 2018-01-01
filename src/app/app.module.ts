import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AddPage } from '../pages/add/add';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UpdatePage } from "../pages/update/update";
import { ItemPage } from "../pages/item/item";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ServiceProvider} from "../providers/service";
import {IonicImageLoader} from "ionic-image-loader";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MyApp,
    AddPage,
    ItemPage,
    UpdatePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicImageLoader.forRoot(),
    IonicImageLoader,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemPage,
    AddPage,
    HomePage,
    UpdatePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
