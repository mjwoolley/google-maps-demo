import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-geocode-lookup",
  templateUrl: "./geocode-lookup.component.html",
  styleUrls: ["./geocode-lookup.component.css"],
})
export class GeocodeLookupComponent implements OnInit {
  address: string;
  private lat: number;
  private lng: number;
  @Output() coordinatesUpdated = new EventEmitter<{
    lat: number;
    lng: number;
    address: string;
  }>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  geocodeAddress(form: NgForm) {
    const value = form.value;
    this.address = value.address;

    // Geocode the address
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=AIzaSyALNWI5gHD-vMMuEsEwvfRiG_ZTEYtfvfg`;

    this.http.get(url).subscribe((response) => {
      if (
        response["status"] === "OK" &&
        response["results"] &&
        response["results"][0]
      ) {
        const location = response["results"][0]["geometry"]["location"];
        if (location) {
          this.lat = location.lat;
          this.lng = location.lng;
          this.coordinatesUpdated.emit({
            lat: this.lat,
            lng: this.lng,
            address: this.address,
          });
        }
      }
    });
  }
}
