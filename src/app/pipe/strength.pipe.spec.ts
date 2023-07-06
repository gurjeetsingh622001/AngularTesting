import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  
  let pipe : StrengthPipe;

  beforeEach(()=>{
    pipe = new StrengthPipe()
  })

  it('should return strong if value grater than 10  and less than 20',()=>{
    const result = pipe.transform(11)
    expect(result).toBe('strong')
  })

  it('should return strongest if value grater than 20',()=>{
    const result = pipe.transform(21)
    expect(result).toBe('strongest')
  })

  it('should return weak if value grater than 10',()=>{
    const result = pipe.transform(9)
    expect(result).toBe('weak')
  })





  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });


});
