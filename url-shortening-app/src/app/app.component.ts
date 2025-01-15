import { Component } from '@angular/core';
import { UrlShortenerComponent } from './components/url-shortener/url-shortener.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [UrlShortenerComponent]  // Add UrlShortenerComponent directly to the imports
})
export class AppComponent {
  title = 'url-shortener';
}
