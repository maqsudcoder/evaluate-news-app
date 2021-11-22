// import the js file
import { checkURL } from '../src/client/js/checkURL';

describe('Testing the url', () => {
  test('Testing the checkURL() function', () => {
    expect(checkURL('https://udacity.com')).toBe(true);
  });
  test('Testing the checkURL() function', () => {
    expect(checkURL('kim.u')).toBe(false);
  });
});
