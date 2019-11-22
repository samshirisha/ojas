import { SanPipe } from './san.pipe';

describe('SanPipe', () => {
  it('create an instance', () => {
    const pipe = new SanPipe();
    expect(pipe).toBeTruthy();
  });
});
