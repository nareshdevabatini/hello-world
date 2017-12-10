import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ErrorHandler } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './custom-directive/input-format.directive';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';

import { AppErrorhandler } from './common/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersService } from './services/github-followers.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,NavbarComponent,GithubProfileComponent,GithubFollowersComponent,
    HomeComponent,NotFoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule, 
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'followers/:id/:username',component:GithubProfileComponent},
      {path:'followers',component:GithubFollowersComponent},
      {path:'posts',component:PostsComponent},
      {path:'**',component:NotFoundComponent},
    ])
  ],
  providers: [
    CourseService,PostsService,
    {provide:ErrorHandler,useClass:AppErrorhandler},
    GithubFollowersService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
