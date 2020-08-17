import { validateFields } from '../src/components/Helpers/Validation';

describe('Validation Test Suite', () => {
    it('it takes in a valid string name, returns true', () => {
        const validName = 'test name';
        let result = validateFields.validateName(validName);

        expect(result).toEqual(true);
    });

    it('takes a valid email, returns true', () => {
        const validEmail = 'test@test.com';
        let result = validateFields.validateEmail(validEmail);

        expect(result).toEqual(true);
    });

    it('takes a valid phone, returns true', () => {
        const validPhone = 310-549-7462;
        let result = validateFields.validatePhone(validPhone);

        expect(result).toEqual(true);
    });

    it('takes a valid date, returns true', () => {
        const validDate = 10/10/3000;
        let result = validateFields.validateDate(validDate);

        expect(result).toEqual(true);
    });

    it('takes a valid zip, returns true', () => {
        const validZip = 25941;
        let result = validateFields.validateZip(validZip);

        expect(result).toEqual(true);
    });
});