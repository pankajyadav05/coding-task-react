import counterReducer, {
    increment,
    decrement,
    incrementByAmount,
    CounterSliceState,
  } from './counterSlice';
  
  describe('counter reducer', () => {
    const initialState: CounterSliceState = {
      value: 0,
      status: 'idle',
    };
  
    it('should handle initial state', () => {
      expect(counterReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  
    it('should handle increment', () => {
      const actual = counterReducer(initialState, increment());
      expect(actual.value).toEqual(1);
    });
  
    it('should handle decrement', () => {
      const actual = counterReducer({ value: 5, status: 'idle' }, decrement());
      expect(actual.value).toEqual(4);
    });
  
    it('should handle incrementByAmount', () => {
      const actual = counterReducer(initialState, incrementByAmount(3));
      expect(actual.value).toEqual(3);
    });
  
    it('should not decrement below 0', () => {
      const actual = counterReducer(initialState, decrement());
      expect(actual.value).toEqual(0);
    });
  });
  