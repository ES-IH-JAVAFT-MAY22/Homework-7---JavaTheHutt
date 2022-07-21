import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from '../components/models/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly API_URL = 'http://localhost:8080/trainers'

  constructor(
    private http: HttpClient
  ) { }

  addTrainer(trainer: Trainer): Observable<Trainer> {

    console.log(trainer);
    return this.http.post<any>(this.API_URL, trainer);
  }

 
  }

