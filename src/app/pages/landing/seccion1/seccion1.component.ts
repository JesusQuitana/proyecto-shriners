import { Component, inject } from '@angular/core';
import { LandingComponent } from '../landing.component';

@Component({
  selector: 'app-seccion1',
  imports: [],
  templateUrl: './seccion1.component.html',
  styleUrl: './seccion1.component.scss'
})
export class Seccion1Component {
  private landingComponent = inject(LandingComponent);

  scroll()
  {
    this.landingComponent.scroll();
  }
}
