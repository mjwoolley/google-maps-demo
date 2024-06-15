import { Component } from "@angular/core";
import { MouseEvent } from "@agm/core";
import { FormControl, NgForm } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 15;

  // initial center position for the map
  lat: number = 39.95506043661738;
  lng: number = -75.6052555915931;
  address: string = "235 Dean St, West Chester, PA 19382";

  onCoordinatesUpdated(event: { lat: number; lng: number; address: string }) {
    // re-center the map and update the market
    this.lat = event.lat;
    this.lng = event.lng;
    this.address = event.address;
  }
}
