import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';

import { PostsService } from '../services/posts.service';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-fount-error';
import { BadInputs } from '../common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts:any=[];
 
  constructor(private service:PostsService){
    
  }

  ngOnInit(){
    this.service.getAll().subscribe(posts=>this.posts=posts)
  }
  createTitle(input:HTMLInputElement){
    let post={title:input.value};
    this.posts.splice(0,0,post); 
    input.value="";
    this.service.create(post).subscribe(newpost=>{
      post['id']=newpost.id;
       
    },(error:AppError)=>{
      this.posts.splice(0,1); 

      if(error instanceof BadInputs){
        //this.form.setErrors(error.AppError())
      }
      else throw error
    })
    
  }
  updateData(post){
    this.service.update(post)
      .subscribe(updatedPost=>{
        console.log(updatedPost);
      })
  }
  deletePost(post){
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.service.delete(post.id)
      .subscribe(null,(error:AppError)=>{
        this.posts.splice(index,0,post);

        if(error instanceof NotFoundError)
          alert("this post has already deleted");
        else throw error
      })
  }
}
