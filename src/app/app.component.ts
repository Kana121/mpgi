import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/landing/home/home.component';
import { CureerComponent } from './components/landing/cureer/cureer.component';
import { ContactUsComponent } from './components/landing/contact-us/contact-us.component';
import { NavbarComponent } from './components/landing/navbar/navbar.component';
import { FooterComponent } from './components/landing/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterLink,
    HomeComponent,
    CureerComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mpgi';
}
