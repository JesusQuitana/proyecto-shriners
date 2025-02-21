import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eventos',
  imports: [FooterComponent],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EventosComponent{
  private router = inject(Router);

  navigate(url: string) : void
  {
    this.router.navigate([`shriners/${url}`]);
  }

  evento(title: string, contact: string) : void
  {
    Swal.fire({
      title: `${title}`,
      icon: "info",
      text: `Contacta con nosotros mediante: ${contact}`,
      showConfirmButton: true,
      confirmButtonText: '<i class="fa-solid fa-phone"></i>',
      focusConfirm: false,
    })
  }
}
