import { ErrorHandler } from "@angular/core";

export class AppErrorhandler implements ErrorHandler{
    handleError(error){
        alert("an Unepected error occured");
        console.log(error);
    }
}