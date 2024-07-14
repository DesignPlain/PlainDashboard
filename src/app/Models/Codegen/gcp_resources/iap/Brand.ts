import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface BrandArgs {
  /*
Application name displayed on OAuth consent screen.


- - -
*/
  applicationTitle?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Support email displayed on the OAuth consent screen. Can be either a
user or group email. When a user email is specified, the caller must
be the user with the associated email address. When a group email is
specified, the caller can be either a user or a service account which
is an owner of the specified group in Cloud Identity.
*/
  supportEmail?: string;
}
export class Brand extends Resource {
  /*
Application name displayed on OAuth consent screen.


- - -
*/
  public applicationTitle?: string;

  /*
Output only. Identifier of the brand, in the format `projects/{project_number}/brands/{brand_id}`
NOTE: The name can also be expressed as `projects/{project_id}/brands/{brand_id}`, e.g. when importing.
NOTE: The brand identification corresponds to the project number as only one
brand can be created per project.
*/
  public name?: string;

  // Whether the brand is only intended for usage inside the GSuite organization only.
  public orgInternalOnly?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Support email displayed on the OAuth consent screen. Can be either a
user or group email. When a user email is specified, the caller must
be the user with the associated email address. When a group email is
specified, the caller can be either a user or a service account which
is an owner of the specified group in Cloud Identity.
*/
  public supportEmail?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "applicationTitle",
        "Application name displayed on OAuth consent screen.\n\n\n- - -",
        [],
        true,
        true,
      ),
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
        "supportEmail",
        "Support email displayed on the OAuth consent screen. Can be either a\nuser or group email. When a user email is specified, the caller must\nbe the user with the associated email address. When a group email is\nspecified, the caller can be either a user or a service account which\nis an owner of the specified group in Cloud Identity.",
        [],
        true,
        true,
      ),
    ];
  }
}
