import { Component } from '@angular/core';
import { BleClient as bleClient } from '@capacitor-community/bluetooth-le';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    this.init();
  }

  init = async () => {
    try {
      await bleClient.initialize({ androidNeverForLocation: true });
    } catch (err) {
      console.log({ err });
    }
  };

  getDevices = async () => {
    try {
      //@ts-ignore
      const res = await bleClient.requestDevice();
      console.log({ res });
    } catch (err) {
      console.log({ err });
    }
  };
}
