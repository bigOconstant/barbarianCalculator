import { Component } from '@angular/core';
import {CharacterComponent} from './character';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CharacterComponent]
})
export class AppComponent {
  title = 'Rage and power attack calculator';
}
