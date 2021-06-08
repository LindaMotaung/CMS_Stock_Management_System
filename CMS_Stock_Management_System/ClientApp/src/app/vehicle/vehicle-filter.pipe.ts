import { PipeTransform , Pipe} from '@angular/core';
import { Vehicle } from "../vehicles-model/vehicle.model";

@Pipe({
    name: 'searchVehicleFilter',
    pure: false
})
export class VehicleFilterPipe implements PipeTransform {
    private counter: number = 0;
    transform(vehicles: Vehicle[], searchTerm: string) : Vehicle[]{
        this.counter++;
        console.log('Filter pipe called on mouse move:' + this.counter);
        
        if(!vehicles || !searchTerm){
            return vehicles;  
        }
        else{
            return vehicles.filter(vehicle => vehicle.vehicleMake.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        }
    }
}