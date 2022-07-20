import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from '../components/models/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly API_URL = 'https://localhost/8080'

  constructor(
    private http: HttpClient
  ) { }

 
  }

