import { Component, inject } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  private router = inject(Router);

  navigate(url: string) : void
  {
    this.router.navigate([`shriners/${url}`]);
  }
}
