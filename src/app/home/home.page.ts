import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; 

var num=0;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {
  constructor(public alertCtrl: AlertController) {}
  async showAlert() {
	  num++;
    let str : string;
    if(num==1){
      str='You pressed the button ' + num + ' time!';
    }
    else{
      str='You pressed the button ' + num + ' times!';
    }
    const alert = await this.alertCtrl.create({
      header: 'Alert',  
      message: str,  
      buttons: ['OK']  
    });
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }

}