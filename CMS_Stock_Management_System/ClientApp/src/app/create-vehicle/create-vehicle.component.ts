import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-create-vehicle",
  templateUrl: "./create-vehicle.component.html",
  styleUrls: ["./create-vehicle.component.css"]
})
export class CreateVehicleComponent implements OnInit {
  photoPreview = false;
  fuelType = "petrol";
  isActive = true;


  constructor() {

   }

  ngOnInit() {
  }

  saveVehilce(vehicleForm: NgForm): void {
    // console.log(vehicleForm.value);
    console.log(vehicleForm);
  }

  togglePhotoPreview() {
    this.photoPreview = !this.photoPreview;
  }
}
