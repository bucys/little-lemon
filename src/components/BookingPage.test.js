import { initializeTimes, updateTimes } from './BookingPage';

describe('BookingPage tests', () => {
  test('initializeTimes returns the correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expect(initializeTimes()).toEqual(expectedTimes);
  });

  test('updateTimes returns the same times regardless of the selected date', () => {
    const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const selectedDate = '2023-08-08';
    expect(updateTimes(state, selectedDate)).toEqual(state);
  });
});
