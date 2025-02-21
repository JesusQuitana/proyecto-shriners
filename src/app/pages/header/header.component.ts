import { Component, inject, NgModule } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private landindComponent = inject(LandingComponent);
  private router = inject(Router);

  scroll()
  {
    this.landindComponent.scroll();
  }

  navigate(url: string) : void
  {
    this.router.navigate([`shriners/${url}`]);
  }
}
