import { ContactUsComponent } from './components/landing/contact-us/contact-us.component';
import { CureerComponent } from './components/landing/cureer/cureer.component';
import { HomeComponent } from './components/landing/home/home.component';
import { Routes } from '@angular/router';
import { StudentLoginComponent } from './components/landing/student-login/student-login.component';
import { StudentRegisterComponent } from './components/landing/student-register/student-register.component';
import { TeacherLoginComponent } from './components/landing/teacher-login/teacher-login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path:'home', component:HomeComponent
    },
    { path: 'career', component: CureerComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'student-login', component: StudentLoginComponent },
    { path: 'student-register', component: StudentRegisterComponent },
    { path: 'teacher-login', component: TeacherLoginComponent },

    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
