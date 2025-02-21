import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion6',
  imports: [],
  templateUrl: './seccion6.component.html',
  styleUrl: './seccion6.component.scss'
})
export class Seccion6Component {
  private router = inject(Router);

  navigate(url: string) : void
  {
    this.router.navigate([`shriners/${url}`]);
  }
}
