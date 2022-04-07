import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISearchItems } from '../search/search-item.model'

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private readonly baseUrl = '../../assets/data.json';


  constructor( private http: HttpClient) {

   }

   public getAllVideos(items:ISearchItems): Observable<ISearchItems>{
    const url = `${this.baseUrl}/${items.snippet}`;
    return this.http.get<ISearchItems>(url);
  }

}
