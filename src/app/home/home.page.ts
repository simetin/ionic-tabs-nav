import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  view1(){
    this.navCtrl.navigateForward("/view1");
  }

  tabs(){
    this.navCtrl.navigateRoot("/tabs/tabs");
  }

}
