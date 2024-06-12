import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent {
  username: string="";
  password: string="";

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Implement actual login logic here (e.g., sending credentials to a server)
  }
}
