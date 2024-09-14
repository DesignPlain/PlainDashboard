import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AccessPolicyArgs {
  /*
The parent of this AccessPolicy in the Cloud Resource Hierarchy.
Format: organizations/{organization_id}
*/
  parent?: string;

  /*
Folder or project on which this policy is applicable.
Format: folders/{{folder_id}} or projects/{{project_id}}
*/
  scopes?: string;

  /*
Human readable title. Does not affect behavior.


- - -
*/
  title?: string;
}
export class AccessPolicy extends DS_Resource {
  // Resource name of the AccessPolicy. Format: {policy_id}
  public name?: string;

  /*
The parent of this AccessPolicy in the Cloud Resource Hierarchy.
Format: organizations/{organization_id}
*/
  public parent?: string;

  /*
Folder or project on which this policy is applicable.
Format: folders/{{folder_id}} or projects/{{project_id}}
*/
  public scopes?: string;

  /*
Human readable title. Does not affect behavior.


- - -
*/
  public title?: string;

  // Time the AccessPolicy was updated in UTC.
  public updateTime?: string;

  // Time the AccessPolicy was created in UTC.
  public createTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The parent of this AccessPolicy in the Cloud Resource Hierarchy.\nFormat: organizations/{organization_id}",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "scopes",
        "Folder or project on which this policy is applicable.\nFormat: folders/{{folder_id}} or projects/{{project_id}}",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "title",
        "Human readable title. Does not affect behavior.\n\n\n- - -",
        () => [],
        true,
        false,
      ),
    ];
  }
}
