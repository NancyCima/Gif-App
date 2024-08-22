import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'dHtPrN80u1qv0wFTEqyrgtHVZHEVCbWG';
  private urlService: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];

  public results: any[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._history = JSON.parse(localStorage.getItem('historial')!);
      this.results = JSON.parse(localStorage.getItem('resultados')!);
    }
  }

  searchGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<any>(`${this.urlService}/search`, { params })
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.results));
      });
  }
}