import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { BackendService } from 'src/app/services/backend.service';
import { Trainer } from '../models/trainer.model';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  name: string;
  age: number;
  hobby: string;
  photo: string;

  trainer: Trainer;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService,
    private router: Router
  ) { 
    this.name= "";
    this.age= 0;
    this.hobby= "";
    this.photo= "";
    this.trainer= new Trainer("",0,"","");
  }

  onSubmit(): void {
    
    this.trainer.name=this.name;
    this.trainer.age=this.age;
    this.trainer.hobby=this.hobby;
    this.trainer.photo=this.photo;
    console.log(this.trainer);

      
  }

  addPokemon(trainer: Trainer): Observable<any> {

    const body = {
      name: trainer.name,
      age: trainer.age,
      hobby: trainer.hobby,
      photo: trainer.photo
    }

    return this.http.post<any>(`https://localhost:8080/trainers`, body);
  }

  ngOnInit(): void {}

  }

  
