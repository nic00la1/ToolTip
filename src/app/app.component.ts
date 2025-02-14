import { Component } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';

@Component({
  selector: 'app-root',
  imports: [TooltipComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToolTip';
}
