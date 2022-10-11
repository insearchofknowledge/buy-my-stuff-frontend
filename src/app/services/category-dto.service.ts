import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryDto } from '../dto/category-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryDtoService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) {}

  public getCategories(): Observable<CategoryDto[]>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<CategoryDto[]>('/api/categories',{headers: headers});
  }
}