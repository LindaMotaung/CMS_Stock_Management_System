import { CanDeactivate } from "@angular/router";
import {CreateVehicleComponent} from "./create-vehicle.component";
import { Injectable } from "@angular/core";

@Injectable()
export class CreateVehicleCanDeactivateService implements CanDeactivate<CreateVehicleComponent>{
    
    constructor() { }

    
    canDeactivate(component: CreateVehicleComponent): boolean {
        //if(component.createVehicleForm.dirty){
        //    return confirm("Are you sure you want to discard your changes?");
        //}
        //else{
        //    return true;
        //}

        return true;
    }
}
