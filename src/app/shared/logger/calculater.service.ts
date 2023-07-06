import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculaterService {

  constructor(private loggerService : LoggerService) { }

  add(a: number, b: number) {
    this.loggerService.log('Add funciton is called')
    return a + b
  }

  subtract(a: number, b: number) {
    this.loggerService.log('sub funciton is called')
    return a - b
  }
}
