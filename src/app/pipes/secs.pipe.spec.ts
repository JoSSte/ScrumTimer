import { SecsPipe } from './secs.pipe';

describe('SecsPipe', () => {
  const pipe = new SecsPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms 100 to "01:40"', () => {
    expect(pipe.transform(100)).toBe('01:40');
  });

  it('transforms 10 to "00:10"', () => {
    expect(pipe.transform(10)).toBe('00:10');
  });

  it('transforms -70 to "-01:10"', () => {
    expect(pipe.transform(-70)).toBe('-01:10');
  });

});
