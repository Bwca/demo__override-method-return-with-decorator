import { convertStringToDateRecursively } from './convert-string-to-date-recursively.util';

describe('Tests for convertStringToDateRecursively', () => {
  it('Should convert 1 level depth object', () => {
    // Arrange
    const x = {
      date: '2014-12-20T21:17:50.313000Z',
    };

    // Act
    const { date } = convertStringToDateRecursively(x, () => true);

    // Assert
    expect(<any>date instanceof Date).toBeTruthy();
  });
  it('Should convert 2 level depth object', () => {
    // Arrange
    const x = {
      y: {
        date: '2014-12-20T21:17:50.313000Z',
      },
    };

    // Act
    const {
      y: { date },
    } = convertStringToDateRecursively(x, () => true);

    // Assert
    expect(<any>date instanceof Date).toBeTruthy();
  });
  it('Should convert 2 level depth object inside of an array', () => {
    // Arrange
    const x = [
      {
        y: {
          date: '2014-12-20T21:17:50.313000Z',
        },
      },
    ];

    // Act
    const [
      {
        y: { date },
      },
    ] = convertStringToDateRecursively(x, () => true);

    // Assert
    expect(<any>date instanceof Date).toBeTruthy();
  });
});
