import { Component } from "@angular/core";
import { MouseEvent } from "@agm/core";
import { FormControl, NgForm } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  latControl = new FormControl();
  lngControl = new FormControl();

  updateCoordinates(form: NgForm) {
    const value = form.value;
    this.lat = value.lat;
    this.lng = value.lng;
  }
  // google maps zoom level
  zoom: number = 15;

  // initial center position for the map
  lat: number = 39.95506043661738;
  lng: number = -75.6052555915931;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log("dragEnd", m, $event);
  }

  markers: marker[] = [
    {
      lat: 39.95506043661738,
      lng: -75.6052555915931,
      label: "H",
      draggable: false,
    },
    // {
    //   lat: 51.373858,
    //   lng: 7.215982,
    //   label: "B",
    //   draggable: false,
    // },
    // {
    //   lat: 51.723858,
    //   lng: 7.895982,
    //   label: "C",
    //   draggable: true,
    // },
  ];
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
