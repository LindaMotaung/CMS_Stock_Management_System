import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProductionStages } from "../vehicles-model/production-stages-model";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";


@Component({
  selector: "app-create-vehicle",
  templateUrl: "./create-vehicle.component.html",
  styleUrls: ["./create-vehicle.component.css"]
})
export class CreateVehicleComponent implements OnInit {
  @ViewChild("vehicleForm") public createVehicleForm: NgForm;
  photoPreview = false;
  fuelType = "petrol";
  isActive = true;
  productionStage = "1";
  datePickerColor: Partial<BsDatepickerConfig>;

  prodStages: ProductionStages[] = [
    {id: 1, stageName: "Design"},
    {id: 2, stageName: "Manufacturing"},
    {id: 3, stageName: "Assembly"},
    {id: 4, stageName: "Testing"}
  ];

  constructor() {
      this.datePickerColor = Object.assign({},
        {
          containerClass: "theme-dark-blue",
          showWeekNumbers: false,
          dateInputFormat: "DD/MM/YYYY"
        });
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
