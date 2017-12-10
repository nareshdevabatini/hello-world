import { AbstractControl } from "@angular/forms/src/model";
import { ValidationErrors } from "@angular/forms/src/directives/validators";
import { promise } from "selenium-webdriver";
import { resolve, reject } from "q";

export class UserNameValidators{
    static cannotContainSpace(control:AbstractControl):ValidationErrors|null{
        if((control.value as string).indexOf(' ')>=0)
            return {cannotContainSpace:true}
        return null;
    }
    
    static shouldBeUnique(control:AbstractControl):Promise<ValidationErrors|null>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(control.value === 'mosh')
                    resolve({ shouldBeUnique:true });
                else
                    resolve(null);
            }, 2000);
        })
    }
}