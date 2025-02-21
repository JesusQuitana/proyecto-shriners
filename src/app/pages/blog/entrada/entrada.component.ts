import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-entrada',
  imports: [FooterComponent],
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.scss'
})
export class EntradaComponent {
  private router = inject(Router);

  navigate(url: string) : void
  {
    this.router.navigate([`shriners/${url}`]);
  }
}
