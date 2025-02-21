import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion3',
  imports: [],
  templateUrl: './seccion3.component.html',
  styleUrl: './seccion3.component.scss'
})
export class Seccion3Component {
  private router = inject(Router);

  navigate(url: string) : void
  {
    this.router.navigate([`shriners/${url}`]);
  }
}
