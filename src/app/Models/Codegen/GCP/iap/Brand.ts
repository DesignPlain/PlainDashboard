import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BrandArgs {
  /*
Application name displayed on OAuth consent screen.


- - -
*/
  ApplicationTitle?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Support email displayed on the OAuth consent screen. Can be either a
user or group email. When a user email is specified, the caller must
be the user with the associated email address. When a group email is
specified, the caller can be either a user or a service account which
is an owner of the specified group in Cloud Identity.
*/
  SupportEmail?: string;
}
export class Brand extends Resource {
  /*
Application name displayed on OAuth consent screen.


- - -
*/
  public ApplicationTitle?: string;

  /*
Output only. Identifier of the brand, in the format `projects/{project_number}/brands/{brand_id}`
NOTE: The name can also be expressed as `projects/{project_id}/brands/{brand_id}`, e.g. when importing.
NOTE: The brand identification corresponds to the project number as only one
brand can be created per project.
*/
  public Name?: string;

  // Whether the brand is only intended for usage inside the GSuite organization only.
  public OrgInternalOnly?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Support email displayed on the OAuth consent screen. Can be either a
user or group email. When a user email is specified, the caller must
be the user with the associated email address. When a group email is
specified, the caller can be either a user or a service account which
is an owner of the specified group in Cloud Identity.
*/
  public SupportEmail?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "SupportEmail",
        "Support email displayed on the OAuth consent screen. Can be either a\nuser or group email. When a user email is specified, the caller must\nbe the user with the associated email address. When a group email is\nspecified, the caller can be either a user or a service account which\nis an owner of the specified group in Cloud Identity.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApplicationTitle",
        "Application name displayed on OAuth consent screen.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
