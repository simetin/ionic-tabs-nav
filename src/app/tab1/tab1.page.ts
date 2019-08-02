import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtrl: NavController) {}

  view1(){
    this.navCtrl.navigateForward("/tabs/tabs/view1");
  }

  view2(){
    this.navCtrl.navigateForward("/tabs/tabs/view2");
  }

  tabsView1(){
    this.navCtrl.navigateForward("/tabs/tabs/tab1/view1");
  }

  tabsView2(){
    this.navCtrl.navigateForward("/tabs/tabs/tab1/view2");
  }
}
