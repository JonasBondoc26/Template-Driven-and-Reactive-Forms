import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css',
})
export class TemplateDriven {
  title = 'Template Driven Demo';
  username = '';
  email = '';
  password = '';
  role = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("Form submitted");
  }

}
