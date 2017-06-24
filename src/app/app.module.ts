
import { Landing2Page } from './../pages/landing2/landing2';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';

import { ProfilePage } from '../pages/profile/profile';
import { ContactPage } from '../pages/contact/contact';
import { EngagementsPage } from '../pages/engagements/engagements';
import { UserDataPage } from '../pages/userdata/userdata';
import { TabsPage } from '../pages/tabs/tabs';
import { ClickPage } from './../pages/click/click';
import { PreferenceFormPage } from './../pages/preference-form/preference-form';
import { LandingPage } from './../pages/landing/landing';

import {SignupPage} from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { CustomAuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';

// AF2 Settings
import { fbaseConfig } from '../config/firebaseConfig';

import * as firebase from 'firebase/app';

//FIREBASEUI-ANGULAR
import { AuthMethods, AuthProvider, FirebaseUIAuthConfig, FirebaseUIModule } from 'firebaseui-angular';

const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    AuthProvider.Google,
    AuthProvider.Facebook,
    AuthProvider.Twitter,
    AuthProvider.Github,
    AuthProvider.Password,
    AuthProvider.Phone
  ],
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ContactPage,
    EngagementsPage,
    UserDataPage,
    TabsPage,
    SignupPage,
    LoginPage,
    LandingPage,
    PreferenceFormPage,
    ClickPage,
    Landing2Page
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fbaseConfig),
    AngularFireAuthModule,
   // FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ContactPage,
    EngagementsPage,
    UserDataPage,
    TabsPage,
    SignupPage,
    LoginPage,
    LandingPage,
    PreferenceFormPage,
    ClickPage,
    Landing2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomAuthProvider,
    EventProvider,
    ProfileProvider,
    Camera
  ]
})
export class AppModule {}
