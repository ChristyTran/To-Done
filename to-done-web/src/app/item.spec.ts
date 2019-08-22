import { Item } from './item';

describe('Item', () => {
  it('should create an instance', () => {
    expect(new Item()).toBeTruthy();
  });

    it('should accept values in the constructor', () => {
      let item = new Item({
        title: 'hello',
        complete: true
      });
      expect(item.title).toEqual('hello');
      expect(item.complete).toEqual(true);
    });
});
