import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../constants/constants.service';


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private httpCliente: HttpClient, private constants: ConstantsService) { }

  async requestWordCount(text:String) {
		const response:any = await this.httpCliente.post(`${this.constants.serverUrl}/counter/count-words`, { 'text': text})
    .toPromise()

    return response.wordCount
	}
}
