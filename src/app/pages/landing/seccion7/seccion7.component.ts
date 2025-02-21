import { Router } from '@angular/router';
import { LandingComponent } from './../landing.component';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-seccion7',
  imports: [],
  templateUrl: './seccion7.component.html',
  styleUrl: './seccion7.component.scss'
})
export class Seccion7Component {
  private router = inject(Router);

  navigate(url: string) : void
  {
    this.router.navigate([`shriners/${url}`]);
  }
}
