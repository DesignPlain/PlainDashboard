import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AccessPolicyArgs {
  /*
The parent of this AccessPolicy in the Cloud Resource Hierarchy.
Format: organizations/{organization_id}
*/
  Parent?: string;

  /*
Folder or project on which this policy is applicable.
Format: folders/{{folder_id}} or projects/{{project_id}}
*/
  Scopes?: string;

  /*
Human readable title. Does not affect behavior.


- - -
*/
  Title?: string;
}
export class AccessPolicy extends Resource {
  // Time the AccessPolicy was updated in UTC.
  public UpdateTime?: string;

  // Time the AccessPolicy was created in UTC.
  public CreateTime?: string;

  // Resource name of the AccessPolicy. Format: {policy_id}
  public Name?: string;

  /*
The parent of this AccessPolicy in the Cloud Resource Hierarchy.
Format: organizations/{organization_id}
*/
  public Parent?: string;

  /*
Folder or project on which this policy is applicable.
Format: folders/{{folder_id}} or projects/{{project_id}}
*/
  public Scopes?: string;

  /*
Human readable title. Does not affect behavior.


- - -
*/
  public Title?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of this AccessPolicy in the Cloud Resource Hierarchy.\nFormat: organizations/{organization_id}",
      ),
      new DynamicUIProps(
        InputType.String,
        "Scopes",
        "Folder or project on which this policy is applicable.\nFormat: folders/{{folder_id}} or projects/{{project_id}}",
      ),
      new DynamicUIProps(
        InputType.String,
        "Title",
        "Human readable title. Does not affect behavior.\n\n\n- - -",
      ),
    ];
  }
}
