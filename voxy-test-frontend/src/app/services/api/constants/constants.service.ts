import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  serverUrl="http://localhost:8080"
}

/**
 * Mockup file. This file should be substituted by ENV variables in the future
 */