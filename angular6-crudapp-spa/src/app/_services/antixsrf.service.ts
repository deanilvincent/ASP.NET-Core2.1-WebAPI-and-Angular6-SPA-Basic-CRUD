import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AntixsrfService {

  constructor(private http: HttpClient) { }

  private getTokenFromApi() {
    return this.http.get(`${environment.baseUrl}antixsrf/`);
  }

  saveTokenToLocalStorage() {
    this.getTokenFromApi().subscribe((response: any) => {
      localStorage.setItem('antixsrftoken', response.token);
    }, error => {
      console.log(`Something went wrong ${error}`);
    });
  }
}
