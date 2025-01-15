import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private apiUrl = 'http://localhost:8080';  // Update with your backend API URL

  constructor(private http: HttpClient) {}

  shortenUrl(originalUrl: string, expiryDate: string): Observable<any> {
    const body = {
      originalUrl: originalUrl,
      expiryDate: expiryDate,
    };

    return this.http.post(`${this.apiUrl}/shorten`, body);
  }

  getAnalytics(shortUrl: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/analytics/${shortUrl}`);
  }
}
