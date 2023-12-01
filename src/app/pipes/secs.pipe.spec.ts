import { SecsPipe } from './secs.pipe';

describe('SecsPipe', () => {
  const pipe = new SecsPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  for (const {testId, inputValue, expectedOutput} of [
      { testId: 0, inputValue:   -70, expectedOutput: '-01:10' },
      { testId: 1, inputValue:    10, expectedOutput:  '00:10' },
      { testId: 2, inputValue:   240, expectedOutput:  '04:00' },
      { testId: 3, inputValue:    60, expectedOutput:  '01:00' },
      { testId: 4, inputValue:     0, expectedOutput:  '00:00' },
      { testId: 4, inputValue:    -0, expectedOutput:  '00:00' },
      { testId: 5, inputValue:   120, expectedOutput:  '02:00' },
      { testId: 6, inputValue:   671, expectedOutput:  '11:11' },
      { testId: 6, inputValue:  3599, expectedOutput:  '59:59' },
      { testId: 6, inputValue: -3599, expectedOutput: '-59:59' },
      { testId: 7, inputValue:   100, expectedOutput:  '01:40' }
  ]) {
    it(`Verify seconds to minutes display [${testId}: ${inputValue} → ${expectedOutput}]`, () => {
      //console.log(inputValue + ' → ' + pipe.transform(inputValue));
      expect(pipe.transform(inputValue)).toBe(expectedOutput);
    });
  }

});
