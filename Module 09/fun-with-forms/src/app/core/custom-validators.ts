import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static lowercase(control: AbstractControl): null | ValidationErrors {
        const val = control?.value;

        if (typeof(val) !== 'string') return null;

        if (val.toLowerCase() === val) return null;

        return {
           'lowercase': true
        };

    }

    private static validateMinWords(control: AbstractControl, count: number): null | ValidationErrors {
        const val = control?.value;
        if (typeof(val) !== 'string') return null;

        const words = val.split(' ').filter(w => w.length > 0);

        if (words.length >= count) return null;

        return {
            'minWords': {
                expected: count, 
                actual: words.length
            }
        }
    }

    static minWords(count: number): ValidatorFn {
        return (control: AbstractControl) => this.validateMinWords(control, count);
    }

}