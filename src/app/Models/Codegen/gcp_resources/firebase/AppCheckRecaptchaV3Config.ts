import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AppCheckRecaptchaV3ConfigArgs {
  /*
The ID of an
[Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).


- - -
*/
  appId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The site secret used to identify your service for reCAPTCHA v3 verification.
For security reasons, this field will never be populated in any response.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  siteSecret?: string;

  /*
Specifies the duration for which App Check tokens exchanged from reCAPTCHA V3 artifacts will be valid.
If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  tokenTtl?: string;
}
export class AppCheckRecaptchaV3Config extends Resource {
  /*
The ID of an
[Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).


- - -
*/
  public appId?: string;

  // The relative resource name of the reCAPTCHA V3 configuration object
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The site secret used to identify your service for reCAPTCHA v3 verification.
For security reasons, this field will never be populated in any response.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public siteSecret?: string;

  // Whether the siteSecret was previously set. Since we will never return the siteSecret field, this field is the only way to find out whether it was previously set.
  public siteSecretSet?: boolean;

  /*
Specifies the duration for which App Check tokens exchanged from reCAPTCHA V3 artifacts will be valid.
If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  public tokenTtl?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "siteSecret",
        "The site secret used to identify your service for reCAPTCHA v3 verification.\nFor security reasons, this field will never be populated in any response.\n**Note**: This property is sensitive and will not be displayed in the plan.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tokenTtl",
        "Specifies the duration for which App Check tokens exchanged from reCAPTCHA V3 artifacts will be valid.\nIf unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "appId",
        "The ID of an\n[Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
