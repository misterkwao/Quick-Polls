import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedService } from '../../Services/shared.service';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  constructor(private sharedService: SharedService) {}
  
  //variables
  receivedData!: string;
  ngOnInit() {
    this.sharedService.sharedData$.subscribe(data => {
      this.receivedData = data;
    });
  }
}
