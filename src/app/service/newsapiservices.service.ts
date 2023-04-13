import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=8910af59af354096a4cc528cf8b6e506";

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
}
