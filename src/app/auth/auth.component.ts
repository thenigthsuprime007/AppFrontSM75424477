import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
 
})

export class AuthComponent {
  authForm: FormGroup;

  // Credenciales correctas (podrías obtener esto de un servicio en un caso real)
  correctStudentCode = 'SM75424477';
  correctPassword = '22101994';

  constructor(private fb: FormBuilder, private router: Router) {
    this.authForm = this.fb.group({
      studentCode: ['', [Validators.required, Validators.pattern(/^SM\d{8}$/)]],  // Valida código de alumno
      password: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]]        // Valida la contraseña
    });
  }

  onSubmit() {
    if (this.authForm.valid) {
      const studentCode = this.authForm.value.studentCode;
      const password = this.authForm.value.password;

      if (studentCode === this.correctStudentCode && password === this.correctPassword) {
        // Si las credenciales son correctas, redirige al menú
        this.router.navigate(['/menu']);
      } else {
        // Mostrar un mensaje de error o manejar el caso de credenciales incorrectas
        alert('Código de alumno o contraseña incorrectos');
      }
    }
  }
}
