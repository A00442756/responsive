import { University } from './university.model';

describe('University', () => {
    it('should create an instance', () => {
        expect(new University('', '', '')).toBeTruthy();
    });
});
