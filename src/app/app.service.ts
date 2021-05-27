import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService implements CanActivate {

  private authenticated: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
    private snackbar: MatSnackBar) {
    this.authenticated = new BehaviorSubject<boolean>(false);
  }

  isAuthenticated(): boolean {
    return this.authenticated.getValue();
  }

  login(username: string, password: string): void {
    this.authenticated.next(username === 'bigboss' && password === 'mufufu');
  }

  async canActivate(): Promise<boolean> {
    if (!this.isAuthenticated()) {
      await this.router.navigate(['login']);
      return false;
    }

    return true;
  }

  async logout(redirect?: string): Promise<void> {
    this.authenticated.next(false);
    await this.router.navigate([redirect ?? '/']);
  }

  success(message?: string): void {
    this.snackbar.open(message ?? 'Success');
  }
}
