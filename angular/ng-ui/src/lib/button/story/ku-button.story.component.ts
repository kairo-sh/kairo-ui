import { Component } from '@angular/core';
import {KuButtonDirective} from '../ku-button.directive';

@Component({
  selector: 'ku-button-story',
  imports: [KuButtonDirective],
  standalone: true,
  templateUrl: './ku-button.story.component.html',
  styles: [],
})
export class KuButtonStoryComponent {}
