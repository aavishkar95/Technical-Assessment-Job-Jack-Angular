import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DirectoryModel } from '../models/directoryModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url='http://localhost:8080/files';
  constructor(private http: HttpClient) { }

  public getDirectory():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
