import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllPolls } from '../models/polls.model';
import { Observable } from 'rxjs';
import { Poll } from '../models/poll.model';

@Injectable({
  providedIn: 'root'
})
export class PollsapiService {
  constructor(private http: HttpClient) { }
  private  baseUrl = 'https://api.pollsapi.com/v1';
  private  apiKey = "60GGBV1ZSYM4SVHW3S59JAPSVWQ2";
  private headers = new HttpHeaders().set('api-key',this.apiKey);

  getAllPolls(): Observable<AllPolls>{
    return this.http.get<AllPolls>(`${this.baseUrl}/get/polls`,{headers:this.headers});
  }
  
  getPoll(pollId: string): Observable<Poll>{
    return this.http.get<Poll>(`${this.baseUrl}/get/poll/${pollId}`,{headers:this.headers});
  }

  createPoll(poll:object){
    return this.http.post(`${this.baseUrl}/create/poll`,poll,{headers:this.headers});
  }

  vote(vote:object){
    return this.http.post(`${this.baseUrl}/create/vote`,vote,{headers:this.headers})
  }
}
