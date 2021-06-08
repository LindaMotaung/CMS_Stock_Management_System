import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Vehicle } from '../../vehicles-model/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  vehicle : Vehicle;
  private _id: number;

  constructor(private _route: ActivatedRoute,
              private _vehicleService: VehicleService,
              private _router: Router
              ) { }

  ngOnInit() {
    // this._id = +this._route.snapshot.params['id'];
    this._route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.vehicle = this._vehicleService.getVehicleById(this._id);
    })  
  }

  viewNextVehicle(){
    if(this._id > 0 && this._id < 3){
      this._id = this._id + 1;
    }
    else{
      this._id = 1;
    }
      
      this._router.navigate(['/vehicle', this._id]);
  }

}
