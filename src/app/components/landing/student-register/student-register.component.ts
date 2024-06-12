import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-register',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './student-register.component.html',
  styleUrl: './student-register.component.css'
})
export class StudentRegisterComponent {
  confirmPassword:string="";
  password:string="";
  email:string="";
  lastName:string="";
  firstName:string="";
  register(){
    console.log(this.confirmPassword);
    
  }
}
