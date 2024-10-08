import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MusicCheckerComponent } from './components/music-checker/music-checker.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ToastComponent } from './components/toast/toast.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { MusicGalleryComponent } from './components/music-gallery/music-gallery.component';
import { MusicDialogComponent } from './components/music-dialog/music-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ContactComponent } from './components/sub/contact/contact.component';
import { NavbarComponent } from './components/sub/navbar/navbar.component';
import { HeroComponent } from './components/sub/hero/hero.component';
import { Features1Component } from './components/sub/features1/features1.component';
import { Features2Component } from './components/sub/features2/features2.component';
import { CtaComponent } from './components/sub/cta/cta.component';
import { StepsComponent } from './components/sub/steps/steps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MusicCheckerComponent,
    SignupComponent,
    SigninComponent,
    ToastComponent,
    AdminComponent,
    MusicGalleryComponent,
    MusicDialogComponent,
    LandingPageComponent,
    ContactComponent,
    NavbarComponent,
    HeroComponent,
    Features1Component,
    Features2Component,
    CtaComponent,
    StepsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule


  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
