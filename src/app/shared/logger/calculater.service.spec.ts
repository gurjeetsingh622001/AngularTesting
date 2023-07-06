import { CalculaterService } from "./calculater.service"
import { LoggerService } from "./logger.service"

describe('CalulaterService', () => {

  let mockloggerService: any;
  let calService: CalculaterService;

  beforeEach(() => {
    
    mockloggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calService = new CalculaterService(mockloggerService)
  })

  it('should add two numbers', () => {

    const addFun = calService.add(3, 4)
    expect(addFun).toBe(7)
    expect(mockloggerService.log).toHaveBeenCalledTimes(1)
  })

  it('should subtract two number', () => {

    const addFun = calService.subtract(3, 4)
    expect(addFun).toBe(-1)
    expect(mockloggerService.log).toHaveBeenCalledTimes(1)
  })
})