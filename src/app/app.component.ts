import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'blockchain-start';
  metaMask: any;
  publicAddress: any;
  chainId: string;
  constructor() {}
  ngOnInit(): void {
    console.log(window['ethereum']);
    this.metaMask = window['ethereum'];

    this.metaMask
      .request({ method: 'eth_accounts' })
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  onConnect() {
    this.metaMask
      .request({ method: 'eth_requestAccounts' })
      .then((response: any) => {
        console.log(response[0]);
        this.publicAddress = response[0];
      })
      .catch((error: any) => {
        console.log(error);
      });
    this.metaMask
      .request({ method: 'eth_chainId' })
      .then((response: any) => {
        console.log(response);
        this.chainId = response;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  getNetworkName() {
    console.log(this.metaMask);

    this.metaMask
      .request({ method: 'eth_getNetwork', params: this.chainId })
      .then((response: any) => {
        console.log(response);
        this.chainId = response;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
