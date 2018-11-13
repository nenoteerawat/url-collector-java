import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ILogin} from "../login";
import {Router} from "@angular/router";
import {AuthService} from "../service/authen/auth.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  message: string;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/url-collect/url';
    this.authService.logout();
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f.user.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(this.returnUrl);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log('error');
          this.loading = false;
        });
  }

}
