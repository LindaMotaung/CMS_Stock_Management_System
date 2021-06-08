import { Component, OnInit, Input } from "@angular/core";
import { Vehicle } from "../vehicles-model/vehicle.model";
import { Router, ActivatedRoute } from "@angular/router"
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-list-vehicle",
  templateUrl: "./list-vehicle.component.html",
  styleUrls: ["./list-vehicle.component.css"]
})
export class ListVehicleComponent implements OnInit{

  private _selectedVehicleId: number;
  public searchTerm : string;
  @Input() vehicle1: Vehicle;

  constructor(private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._selectedVehicleId = +this._route.snapshot.paramMap.get('id');
    console.log(this._route.snapshot.queryParamMap.has('searchTerm'));
  }

  vehicle: Vehicle[] = [
    {
      Id: 1,
      vehicleType: "Car",
      vehicleMass: "1500KG",
      vehicleMake: "Hyundai",
      vehicleModel: "i20",
      vehicleYear: 2007,
      imagePath: "./assets/images/car.png"
    },
    {
      Id: 2,
      vehicleType: "Aeroplane",
      vehicleMass: "2000KG",
      vehicleMake: "Jumbo Jet",
      vehicleModel: "Injector",
      vehicleYear: 2007,
      imagePath: "./assets/images/aero.png"
    },
    {
      Id: 3,
      vehicleType: "Bicycle",
      vehicleMass: "142KG",
      vehicleMake: "Two Wheel Drive",
      vehicleModel: "Tractor",
      vehicleYear: 1874,
      imagePath: "./assets/images/bicycle.png"
    }
  ];

  onClick(vehicleId: number) {
    this._router.navigate(['/vehicle', vehicleId]);
  }

  getVehicleById(Id: number): Vehicle {
    return this.vehicle.find(x => x.Id === Id);
  }

  viewVehicle(){
    // this._router.navigate(['/vehicles', this.vehicle1.Id], 
    // { queryParams: {'searchTerm': this.searchTerm}});
    alert('View clicked');
  }
}
