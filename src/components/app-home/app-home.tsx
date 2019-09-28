import { Component, State, h } from '@stencil/core';
import { Holdings } from "../../services/holdings";

// interfaceで連想配列Holdingの中身の型の定義を行う
// value? は値が存在しなくてもよいという意味？
interface Holding {
  crypto: string;
  currency: string;
  amount: number;
  value?: number;
}

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  private holdingsService: Holdings = new Holdings();

  // Stencilでは変更される可能性のあるデータを@State()で定義する
  @State() holdings: Holding[] = [];

  componentWillLoad() {
    // ダミーデータを投入、後で、http通信でデータを取り込む
    /*
    this.holdings = [
      {
        crypto: "BTC",
        currency: "USD",
        amount: 0.1,
        value: 11488.32383
      },
      {
        crypto: "ETH",
        currency: "USD",
        amount: 2,
        value: 1032.23421
      },
      {
        crypto: "BTC",
        currency: "JPY",
        amount: 4,
        value: 103555.223423
      }
    ]
    */
   const router = document.querySelector("ion-router");

   // Reflesh data every time view is entered
   router.addEventListener("ionRouteDidChange", async () => {
     const holdings = await this.holdingsService.getHoldings();
     this.holdings = [...holdings];
   });
  }

  renderWelcomeMessage() {
    return (
      <div>
        {!this.holdings.length ? (
          <div class="message">
            <p>
              <strong>cryptoPWA</strong> is a <strong>P</strong>rogressive <strong>W</strong>eb{" "}
              <strong>A</strong>pplication that allows you to keep track of the approximate worth of
              your cryptocurency portfolio.
            </p>

            <p>
              A PWA is like a normal application from the app store, but you can access it directly
              through the web. You may also add this page to your home screen to launch it like your
              other applications.
            </p>

            <p>
              No account required, just hit the button below to start tracking your coins in
              whatever currency you wish!
            </p>

            <ion-button href="/add-holding" color="primary">
              Add Coins
            </ion-button>
          </div>
        ) : null}
      </div>
    );
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>BitCoin PWA</ion-title>
          <ion-buttons slot="end">
            <ion-button href="/add-holding" routerDirection="forward">
              <ion-icon slot="icon-only" name="add"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        {this.renderWelcomeMessage()}
        <ion-list lines="none">
          {this.holdings.map(holding => (
            <ion-item-sliding>
              <ion-item class="holding">
                <ion-label>
                  <p>
                    <strong>
                      {holding.crypto}/{holding.currency}
                    </strong>
                  </p>
                  <p class="amount">
                    <strong>Coins:</strong> {holding.amount} <strong>Value:</strong> {holding.value}
                  </p>
                  <p class="value">{holding.amount * holding.value}</p>
                </ion-label>
              </ion-item>

              <ion-item-options>
                <ion-item-option color="danger">
                  <ion-icon slot="icon-only" name="trash"></ion-icon>
                </ion-item-option>
              </ion-item-options>
            </ion-item-sliding>
          ))}
        </ion-list>
      </ion-content>,

      <ion-footer>
        <p>
          <strong>Disclaimer:</strong> Do not use this application to make investment decisions.
          Displayed prices may not reflect actual prices.
        </p>
      </ion-footer>
    ];
  }
}
