import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { MapComponent } from "./seccion8/map/map.component";
import { FormComponent } from "./seccion8/form/form.component";
import { Seccion1Component } from "./seccion1/seccion1.component";
import { Seccion2Component } from "./seccion2/seccion2.component";
import { Seccion3Component } from "./seccion3/seccion3.component";
import { Seccion4Component } from "./seccion4/seccion4.component";
import { Seccion5Component } from "./seccion5/seccion5.component";
import { Seccion6Component } from "./seccion6/seccion6.component";
import { Seccion7Component } from "./seccion7/seccion7.component";

@Component({
  selector: 'app-landing',
  imports: [HeaderComponent, FooterComponent, MapComponent, FormComponent, Seccion1Component, Seccion2Component, Seccion3Component, Seccion4Component, Seccion5Component, Seccion6Component, Seccion7Component],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingComponent{
  @ViewChild('asSection8', {
    static: true
  }) section8!: ElementRef;
  private render2 = inject(Renderer2);

  scroll() : void
  {
    window.scrollTo({
      top: this.section8.nativeElement.getBoundingClientRect().top-50,
      behavior: "smooth",
    })
  }
}
