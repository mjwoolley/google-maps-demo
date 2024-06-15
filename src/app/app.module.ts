import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AgmCoreModule } from "@agm/core";
import { GeocodeLookupComponent } from "./geocode-lookup/geocode-lookup.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: "AIzaSyALNWI5gHD-vMMuEsEwvfRiG_ZTEYtfvfg",
    }),
  ],
  declarations: [AppComponent, HelloComponent, GeocodeLookupComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
