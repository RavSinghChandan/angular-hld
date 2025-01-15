import { Component } from '@angular/core';
import { UrlService } from '../../services/url.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule]  // Add FormsModule to imports array
})

  export class UrlShortenerComponent {
    originalUrl: string = '';
    expiryDate: string = '';
    shortenedUrl: string = '';
    analytics: any = null;
  
    constructor(private urlService: UrlService) {}
  
    onShortenUrl() {
      const payload = {
        originalUrl: this.originalUrl,
        expiryDate: this.expiryDate,
      };
  
      this.urlService.shortenUrl(payload.originalUrl, payload.expiryDate).subscribe(
        (response) => {
          this.shortenedUrl = response.shortUrl;
          this.getAnalytics(response.shortUrl);
        },
        (error) => {
          console.error('Error shortening URL:', error);
        }
      );
    }
  
    getAnalytics(shortUrl: string) {
      this.urlService.getAnalytics(shortUrl).subscribe(
        (response) => {
          this.analytics = response;
        },
        (error) => {
          console.error('Error fetching analytics:', error);
        }
      );
    }
}
