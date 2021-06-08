import { Injectable } from "@angular/core";
import { Vehicle } from "../vehicles-model/vehicle.model";
import {Router} from "@angular/router"

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VehicleService{

    constructor(
        private _router: Router) { }

    vehicle: Vehicle[] = [
      {
        Id:1,
        vehicleType: "Car",
        vehicleMass: "1500KG",
        vehicleMake: "Hyundai",
        vehicleModel: "i20",
        vehicleYear: 2007,
        imagePath: "./assets/images/car.png"
      },
      {
        Id:2,
        vehicleType: "Aeroplane",
        vehicleMass: "2000KG",
        vehicleMake: "Jumbo Jet",
        vehicleModel: "Injector",
        vehicleYear: 2007,
        imagePath: "./assets/images/aero.png"
      },
      {
        Id:3,
        vehicleType: "Bicycle",
        vehicleMass: "142KG",
        vehicleMake: "Two Wheel Drive",
        vehicleModel: "Tractor",
        vehicleYear: 1874,
        imagePath: "./assets/images/bicycle.png"
      }
    ];
  
    onClick(vehicleId: number){
      this._router.navigate(['/vehicle', vehicleId]);
    }
  
    getVehicleById(Id: number): Vehicle{
      return this.vehicle.find(x => x.Id === Id);
    }
}