import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DefaultService {
  constructor(private http: HttpClient) {}

  public cache = new Map();

  autocomplete(query: string) {
    const URL = `https://www.reddit.com/subreddits/search.json?q=${query}`;

    const listFromCache = this.cache.get(URL);

    if (listFromCache) {
      return of(listFromCache);
    }

    const response = this.http.get(URL);

    // response.subscribe((data) => this.cache.set(URL, data));

    return response;
  }
}
