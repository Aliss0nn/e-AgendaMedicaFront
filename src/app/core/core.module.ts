import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    AuthModule,
  ],
exports: [
  NavbarComponent,
  AuthModule
],
})
export class CoreModule { }
