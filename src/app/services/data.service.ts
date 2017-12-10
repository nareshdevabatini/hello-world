import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
// import "rxjs/add/operator/promise";

import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-fount-error';
import { BadInputs } from '../common/bad-input';

@Injectable()
export class DataService {
  constructor(private Url:string,private http:Http) { }

  getAll(){
     return this.http.get(this.Url)
     .map(response=>response.json())
      .catch(this.handleError);
  }
  create(resource){
    return this.http.post(this.Url,JSON.stringify(resource))
    .catch(this.handleError);
  }
  update(resource){
    return this.http.patch(this.Url+"/"+resource.id,JSON.stringify({isRead:true}))
    .map(response=>response.json())
    .catch(this.handleError);
  }
  delete(id){
    return this.http.delete(this.Url+"/"+id)
    .map(response=>response.json())
    .catch(this.handleError);
  }
  deletePromise(id){

  }

  private handleError(error:Response){
    if(error.status === 400){
      return Observable.throw(new BadInputs());
    }
    else if(error.status === 404){
      return Observable.throw(new NotFoundError());
    }else{
      return Observable.throw(new AppError(error)); 
    }
  }
}
