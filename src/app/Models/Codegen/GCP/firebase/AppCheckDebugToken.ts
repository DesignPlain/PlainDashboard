import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AppCheckDebugTokenArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The secret token itself. Must be provided during creation, and must be a UUID4,
case insensitive. You may use a method of your choice such as random/random_uuid
to generate the token.
This field is immutable once set, and cannot be updated. You can, however, delete
this debug token to revoke it.
For security reasons, this field will never be populated in any response.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Token?: string;

  /*
The ID of a
[Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id),
[Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id),
or [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id)


- - -
*/
  AppId?: string;

  // A human readable display name used to identify this debug token.
  DisplayName?: string;
}
export class AppCheckDebugToken extends Resource {
  // A human readable display name used to identify this debug token.
  public DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The secret token itself. Must be provided during creation, and must be a UUID4,
case insensitive. You may use a method of your choice such as random/random_uuid
to generate the token.
This field is immutable once set, and cannot be updated. You can, however, delete
this debug token to revoke it.
For security reasons, this field will never be populated in any response.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public Token?: string;

  /*
The ID of a
[Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id),
[Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id),
or [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id)


- - -
*/
  public AppId?: string;

  // The last segment of the resource name of the debug token.
  public DebugTokenId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Token",
        "The secret token itself. Must be provided during creation, and must be a UUID4,\ncase insensitive. You may use a method of your choice such as random/random_uuid\nto generate the token.\nThis field is immutable once set, and cannot be updated. You can, however, delete\nthis debug token to revoke it.\nFor security reasons, this field will never be populated in any response.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AppId",
        "The ID of a\n[Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id),\n[Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id),\nor [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id)\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A human readable display name used to identify this debug token.",
      ),
    ];
  }
}
