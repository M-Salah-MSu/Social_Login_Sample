import { Component } from "@angular/core";

import { AuthService, GoogleLoginProvider } from "angular4-social-login";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  user: any;

  constructor(private socialAuthService: AuthService) {}

  signIn(platform: string) {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(response => {
        console.log("Logined");
        console.log(response);
        this.user = response;
      });
  }
}
