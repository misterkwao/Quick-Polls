import { Component, OnInit } from '@angular/core';
import { PollsapiService } from '../../Services/pollsapi.service';
import { ActivatedRoute } from '@angular/router';
import { Poll } from '../../models/poll.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Chart } from 'angular-highcharts';
// import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  constructor(private PollsapiService: PollsapiService, private route: ActivatedRoute) {}
   
  
  //variables
  poll: any;
  pollId: any;
  selectedOption: string = '';
  // votesChart?: Chart;
  options: any[] = [];
  ngOnInit(): void {
    this.pollId = this.route.snapshot.paramMap.get('id?');
    this.getPoll(this.pollId);
  }

  getPoll(id:string): void{
    this.PollsapiService.getPoll(id).subscribe({
      next: (response) => {
        this.poll = response.data;
      },
      error: (response) => {
        if(response.status !== "success"){
          console.log("Something went wrong")
        }
      }
    });
  }

  vote(): void{
    let object = {
      "poll_id" : this.pollId,
      "option_id": this.selectedOption
    }
    this.PollsapiService.vote(object).subscribe({
      next: (response) => {
        this.getPoll(this.pollId);
        alert("Vote Submitted");
      },
      error: (response) => {
        if(response.status !== "success"){
          console.log("Something went wrong")
        }
      }
    });
  }

  // initializeChart() { // New method to initialize the chart
  //   this.votesChart = new Chart({
  //     chart: {
  //       type: 'bar',
  //     },
  //     title: {
  //       text: 'Total Votes'
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     xAxis: {
  //       categories: this.options,
  //       crosshair: true,
  //       accessibility: {
  //         description: 'Vote'
  //       }
  //     },
  //     yAxis: {
  //       min: 0,
  //       title: {
  //         text: 'counts'
  //       }
  //     },
  //     plotOptions: {
  //       column: {
  //         pointPadding: 0.4,
  //         borderWidth: 0
  //       }
  //     },
  //     series: [
  //       {
  //         type: 'column',
  //         name: 'Votes',
  //         color: 'darkgreen',
  //         data: this.options
  //       }
  //     ]
  //   });
  // }


}
