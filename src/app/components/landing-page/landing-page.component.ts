import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../Services/shared.service';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule,FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  //variables
  username: string='';  
  constructor(private router:Router,private sharedService: SharedService){}
  navToHome(username:string){
    console.log(username)
    this.sharedService.getUser(username);
    this.router.navigateByUrl('/home/polls')
  }
}
