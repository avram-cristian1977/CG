import { ValidationErrors, AbstractControl } from '@angular/forms';

export class RegisterValidators {
  static match(passwordName:string, matchingPasswordname:string) {
return (group: AbstractControl) : ValidationErrors | null =>{

    const password = group.get(passwordName);
    const matchingPassword = group.get(matchingPasswordname);
    
    if (!password || !matchingPassword) {
      return { controlNotFound: false };
    }
    
    const error =
      password.value === matchingPassword.value
        ? null
        : {
            noMatch: true,
          };

          matchingPassword.setErrors(error)
    return error;
    }
}

}
