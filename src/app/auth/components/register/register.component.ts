import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/register-request';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducer';
import { combineLatest } from 'rxjs';
import { BackendErrorsMessagesComponent } from 'src/app/shared/components/backend-errors-messages/backend-errors-messages.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule, BackendErrorsMessagesComponent]
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
    
  })
  constructor(private fb: FormBuilder,
    private store: Store,
    ) { }
  onSubmit() {
    console.log('form', this.form.getRawValue())
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    }
    this.store.dispatch(authActions. register({ request }))
    
  }
}
/*this.authService.register(request)
    .subscribe(res=>{console.log('res', res)})*/