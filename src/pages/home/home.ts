import {Component, NgModule} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ServiceProvider} from "../../providers/service";
import {advert} from "../../class/advert";
import {IonicImageLoader} from "ionic-image-loader";
import {UpdatePage} from "../update/update";
import {ItemPage} from "../item/item";

@NgModule({
    imports: [
  IonicImageLoader
]
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list: advert[];

  constructor(public navCtrl: NavController, private psp: ServiceProvider) {
    this.load();
  }
  load(){
    this.psp.getAdverts()
    .subscribe(data => {
      console.log(data);
      this.list = data;
      console.log("got it");
    },err => {
      console.log(err)
    });};
  delete(id){
    this.psp.removeAdvert(id).subscribe(
      resp => console.log('deleted'),
      error => console.log('error occur, delete fail')
    );
    console.log("remove "+id);
  }
  update(id){
    this.navCtrl.push(UpdatePage,{id: id});
    console.log('update');
  }
  advert(id){
    this.navCtrl.push(ItemPage,{id: id});
  }
}
