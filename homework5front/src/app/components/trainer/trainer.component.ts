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
    this.name= "Maria";
    this.age= 20;
    this.hobby= "dance";
    this.photo= "https://ssb.wiki.gallery/images/6/6c/Pok%C3%A9mon_Trainer_%28solo%29-Alt1_SSBU.png";
    this.trainer= new Trainer("",0,"","");
  }

  onSubmit(): void {
    
    this.trainer.name=this.name;
    this.trainer.age=this.age;
    this.trainer.hobby=this.hobby;
    this.trainer.photo=this.photo;
    console.log(this.trainer);

    this.backendService.addTrainer(this.trainer).subscribe(
      dataResult => {
      }, 
      error => {
        console.log(error.status);
        console.error("There was an error!", error);
      }
    );

      
  }

 


  ngOnInit(): void {}

  

  }

  
