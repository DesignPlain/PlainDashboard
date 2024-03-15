import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AppCheckRecaptchaEnterpriseConfigArgs {
  /*
The ID of an
[Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).


- - -
*/
  AppId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application.
--Important--: This is not the siteSecret (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.
*/
  SiteKey?: string;

  /*
Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid.
If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  TokenTtl?: string;
}
export class AppCheckRecaptchaEnterpriseConfig extends Resource {
  // The relative resource name of the reCAPTCHA Enterprise configuration object
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application.
--Important--: This is not the siteSecret (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.
*/
  public SiteKey?: string;

  /*
Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid.
If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  public TokenTtl?: string;

  /*
The ID of an
[Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).


- - -
*/
  public AppId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AppId",
        "The ID of an\n[Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SiteKey",
        "The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application.\n**Important**: This is not the siteSecret (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TokenTtl",
        "Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid.\nIf unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.\nA duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      ),
    ];
  }
}
