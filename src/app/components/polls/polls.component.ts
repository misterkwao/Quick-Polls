import { Component } from '@angular/core';
import { PollsapiService } from '../../Services/pollsapi.service';
import { Router } from '@angular/router';
import { AllPolls } from '../../models/polls.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@Component({
  selector: 'app-polls',
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.css'
})
export class PollsComponent {

  constructor(private PollsapiService: PollsapiService,private router: Router) {}

  //variables
  all_polls: any[] = [];;
  show_create: boolean = false;
  optValue: string = '';
  options:any[]= [];
  responseData: any;
  searchValue: string = '';
  
  ngOnInit(): void {
    this.getAllPolls();
  }

  getAllPolls(): void {
    this.PollsapiService.getAllPolls().subscribe({
      next: (response) => {
        this.all_polls = response.data.docs;
      },
      error: (response) => {
        if(response.status !== "success"){
          console.log("Something went wrong")
        }
      }
    });
  }

  showCreate(): void{
    this.show_create = !this.show_create;
  }

  addOpt(option:string){
    if(option !== ''){
      this.options.push({"text": option})
    }
    else(
      alert("Option cant be empty")
    )
  }

  createPost(question:string): void{
    let poll = {
      "question": question,
      "options": this.options
    }
    if(this.options.length >= 2){
      this.PollsapiService.createPoll(poll).subscribe({
        next: (response) => {
          this.responseData= response;
          this.getAllPolls()
          this.showCreate();
        },
        error: (response) => {
          console.log(response)
          if(response.status !== "success"){
            alert("Something went wrong")
          }
        }
      });
    }else{
      alert("Options cant be less than 2")
    }

  }
  showPoll(id:string): void {
    this.router.navigate(['/home/details', id]);
  }
}
