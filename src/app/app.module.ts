import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular4-social-login';

import { AppComponent } from "./app.component";

const google_ClientId:string = '851263354609-u1e22hcrqahmp0l7hsk3auqvs2ld6a6a.apps.googleusercontent.com';

let config = new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider:new GoogleLoginProvider(google_ClientId)
  }
]);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SocialLoginModule.initialize(config)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
