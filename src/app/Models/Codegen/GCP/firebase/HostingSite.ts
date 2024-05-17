import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface HostingSiteArgs {
  /*
Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id)
associated with the Hosting site.
*/
  AppId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Required. Immutable. A globally unique identifier for the Hosting site. This identifier is
used to construct the Firebase-provisioned subdomains for the site, so it must also be a valid
domain name label.
*/
  SiteId?: string;
}
export class HostingSite extends Resource {
  /*
Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id)
associated with the Hosting site.
*/
  public AppId?: string;

  // The default URL for the site in the form of https://{name}.web.app
  public DefaultUrl?: string;

  /*
Output only. The fully-qualified resource name of the Hosting site, in the
format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the
Firebase project's
[`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ---(recommended)--- or its
[`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id).
Learn more about using project identifiers in Google's
[AIP 2510 standard](https://google.aip.dev/cloud/2510).
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Required. Immutable. A globally unique identifier for the Hosting site. This identifier is
used to construct the Firebase-provisioned subdomains for the site, so it must also be a valid
domain name label.
*/
  public SiteId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AppId",
        "Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id)\nassociated with the Hosting site.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SiteId",
        "Required. Immutable. A globally unique identifier for the Hosting site. This identifier is\nused to construct the Firebase-provisioned subdomains for the site, so it must also be a valid\ndomain name label.",
        [],
        false,
        true,
      ),
    ];
  }
}
