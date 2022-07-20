import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConstantsService } from '../constants/constants.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private httpCliente: HttpClient, private constants: ConstantsService) { }

  /**
   * Calls API requesting to count words on a
   * @param {String} text - Text string that should have its words counted
   * @returns {Number} Returns the number of words. 
   */
  async requestWordCount(text:String) {
		const response:any = await this.httpCliente.post(`${this.constants.serverUrl}/counter/count-words`, { 'text': text})
    .pipe(timeout(3000), catchError(_ => of({error: "Request timeout", wordCount: 0})))
    .toPromise()

    return response
	}

  async new(){
    
  }
  
}
