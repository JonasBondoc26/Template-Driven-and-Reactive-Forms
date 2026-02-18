import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {

  roles = ['Admin', 'User', 'Guest'];
  form!: FormGroup;

  submitted = false;
  submittedData: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)
      ]],
      role: ['Admin', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted = true;
    this.submittedData = this.form.value;
  }

  isInvalid(name: string): boolean {
    const control = this.form.get(name);
    return !!(control && control.touched && control.invalid);
  }
}

