import {Injectable} from '@angular/core'

@Injectable()
export class VehicleService{

    vehicles = [{ id: 1, type:"bike", name:"Suzuki Hayate", desc:"You have selected Suzuki Hayate"},
    { id: 2, type:"bike", name:"Yamaha R15", desc:"You have selected Yamaha R15"},
    { id: 3, type:"bike", name:"KTM", desc:"You have selected KTM"},
    { id: 4, type:"scooty", name:"Mestro", desc:"You have selected Mestro"},
    { id: 5, type:"scooty", name:"Access", desc:"You have selected Access"},
    { id: 6, type:"scooty", name:"Activa", desc:"You have selected Activa"},
    { id: 7, type:"car", name:"Swift", desc:"You have selected Swift"},
    { id: 8, type:"car", name:"i20", desc:"You have selected i20"},
    { id: 9, type:"car", name:"ciaz", desc:"You have selected ciaz"},
    { id: 10, type:"jeep", name:"Thar", desc:"You have selected Thar"},
    { id: 11, type:"jeep", name:"Scorpio", desc:"You have selected Scorpio"},
    { id: 12, type:"jeep", name:"Fortuner", desc:"You have selected Fortuner"},
    
    ];





    getBikes() : any[] {
        return this.vehicles.filter(item =>{
            return item.type == "bike";
        })
    }

    getCars() : any[] {
        return this.vehicles.filter(item =>{
            return item.type == "car";
        })    }

    getJeeps() : any[] {
        return this.vehicles.filter(item =>{
            return item.type == "jeep";
        })    }

    getScooties() : any[] {
        return this.vehicles.filter(item =>{
            return item.type == "scooty";
        })    }

     getVehicleInfo(id :number) : any[] {
            return this.vehicles.filter(item =>{
                return item.id === id;
            })    }

}