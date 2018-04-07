import { Component } from '@angular/core';
import * as Pull from 'pulljs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pull = Pull.init({
              instructionsPullToRefresh: 'Pull to Refresh',
              instructionsReleaseToRefresh: 'Loslassen um zu Aktualisieren',
              instructionsRefreshing: 'Aktualsiere...',
              onRefresh: () => alert('hello pulljs')
  });


}
