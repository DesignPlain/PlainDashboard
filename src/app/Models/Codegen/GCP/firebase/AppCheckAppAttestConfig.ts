import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AppCheckAppAttestConfigArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid.
If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  TokenTtl?: string;

  /*
The ID of an
[Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).


- - -
*/
  AppId?: string;
}
export class AppCheckAppAttestConfig extends Resource {
  /*
The ID of an
[Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).


- - -
*/
  public AppId?: string;

  // The relative resource name of the App Attest configuration object
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid.
If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  public TokenTtl?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AppId",
        "The ID of an\n[Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TokenTtl",
        "Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid.\nIf unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      ),
    ];
  }
}
