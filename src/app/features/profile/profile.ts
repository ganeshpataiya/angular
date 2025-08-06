import { Component } from "@angular/core";

@Component({
  selector: "app-profile", 
    templateUrl: "./profile.html",
    styleUrls: ["./profile.scss"]
})
export class Profile {
  protected title = "app-profile";

  test() {
    console.log("test");
    alert("test");
  }
}