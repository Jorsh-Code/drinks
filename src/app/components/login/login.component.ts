import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import StorageHelper from 'src/app/libs/helpers/storage.helper';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public password: string = '';
  public username: string = '';

  constructor(public apiService: ApiService,private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.username,this.password);
    
    this.apiService.login(this.username,this.password).subscribe({
      next: (resp: any)=>{
        StorageHelper.setItem('session',resp)
        this.router.navigate(['search'])
      }
    })
  }
}
