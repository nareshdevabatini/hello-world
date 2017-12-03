import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() { }
  getCourse(){
    return ['course','course2','course3'];
  }
}
