import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Dashboard from '../components/Dashboard/Dashboard';

jest.mock('../__mocks__/api', () => ({
  fetchWeatherData: jest.fn(),
}));

describe('Dashboard component', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('renders Loading initially', () => {
    render(<Dashboard />);
    const loadingElement = screen.getByText(/Loading/i);
    expect(loadingElement).toBeInTheDocument();
  });

  it('fetches weather data and updates content after delay', async () => {
    const mockTemperature = 72;
    const mockDescription = 'Sunny';

    const fetchSpy = jest.spyOn(global, 'fetch');
    fetchSpy.mockResolvedValueOnce({
      ok: true,
      json: () => ({
        temperature: mockTemperature,
        description: mockDescription,
      }),
    });

    render(<Dashboard />);

    await act(async () => {
      jest.advanceTimersByTime(0);
    });

    const temperatureElement = screen.getByText(
      `Temperature: ${mockTemperature} °F`
    );
    const descriptionElement = screen.getByText(mockDescription);

    expect(temperatureElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();

    expect(fetchSpy).toHaveBeenCalledTimes(2);

    fetchSpy.mockRestore();
  });
});
