import { initializeTimes, updateTimes } from './BookingPage';
import { fetchAPI } from '../api/api';

// Define your mock data
const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
// Mock the fetchAPI function
jest.mock('../api/api', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(mockTimes)),
}));


describe('BookingPage', () => {
  let fetchApiMock;

  beforeEach(() => {
    fetchApiMock = jest.spyOn({ fetchAPI }, 'fetchAPI');
    fetchApiMock.mockImplementation(() => Promise.resolve(mockTimes));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('initializeTimes returns available times', async () => {
    const times = await initializeTimes();
    expect(times).toEqual(mockTimes);
    expect(fetchApiMock).toHaveBeenCalled();
  });

  test('updateTimes updates available times', () => {
    const mockState = [];
    const mockAction = {
      type: 'update',
      payload: mockTimes // notice the change here
    };

    const times = updateTimes(mockState, mockAction);
    expect(times).toEqual(mockTimes);
});

});
