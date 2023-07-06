import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    service = new LoggerService()
  });

  it('messages array length should be 0 when LoggerService is initialized', () => {
    let messagesArrayLength = service.messages.length
    expect(messagesArrayLength).toBe(0)
  });

  it('messages array should have that message which is passed in log method', () => {
    service.log('message')
    expect(service.messages[0]).toBe('message')
  });

  it('messages array should be cleared when clear method is invoked', () => {
    service.clear()
    expect(service.messages.length).toBe(0)
  });




});
