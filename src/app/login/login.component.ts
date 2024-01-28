import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../ValidateForm/ValidateForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: SharedService, private router: Router ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
      
    })
  }
  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe({
        next: (res) => {
          alert(res.message)
          this.router.navigate(['/app-indexsp'])
        },
        error: (err) => {
          alert(err?.error.message)
        }
        
      })
    }else{
      ValidateForm.validateAllFormField(this.loginForm);
    }
  }


}

  
  