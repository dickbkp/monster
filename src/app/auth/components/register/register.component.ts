import { Component } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/actions';
import { RegisterRequest } from '../../types/register-request';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports:[ReactiveFormsModule, RouterModule]
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required]
  })
  constructor(private fb: FormBuilder, private store: Store){}
  onSubmit(){
    console.log('form', this.form.getRawValue())
    const request: RegisterRequest={
      user: this.form.getRawValue()
    }
    this.store.dispatch(register({request}))
  }
}
