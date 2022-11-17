import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../shared/services/modal.service';
import { RegisterValidators } from '../validators/register-validators';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent   {

  constructor(private modalService : ModalService){

  }

  passlength: any;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  confirmPassword = new FormControl('');

  signUpForm = new FormGroup(
    {
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    },
    [RegisterValidators.match('password', 'confirmPassword')]
  );

  submitBtnDisabled = this.signUpForm.status === 'VALID' ? true : false;
  onSubmitForm() {
    this.modalService.closeDialog();
    console.log(this.signUpForm);
  }

  checkLength() {
    if (
      this.signUpForm.controls.password?.errors &&
      this.signUpForm.controls.password?.errors['minlength'] &&
      this.signUpForm.controls.password?.errors['minlength']['actualLength'] < 6
    ) {
      return true;
    } else {
      return false;
    }
  }

  onCloseModal() {
    this.modalService.closeDialog();
  }


}
