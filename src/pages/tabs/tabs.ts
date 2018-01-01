import { Component } from '@angular/core';

import { AddPage } from '../add/add';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = AddPage;

  constructor() {

  }
}
