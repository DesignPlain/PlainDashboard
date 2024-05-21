import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface FolderArgs {
  /*
The resource name of the parent Folder or Organization.
Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
*/
  parent?: string;

  /*
The folder’s display name.
A folder’s display name must be unique amongst its siblings, e.g. no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters.
*/
  displayName?: string;
}
export class Folder extends Resource {
  // The resource name of the Folder. Its format is folders/{folder_id}.
  public name?: string;

  /*
The resource name of the parent Folder or Organization.
Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
*/
  public parent?: string;

  /*
Timestamp when the Folder was created. Assigned by the server.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  /*
The folder’s display name.
A folder’s display name must be unique amongst its siblings, e.g. no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters.
*/
  public displayName?: string;

  // The folder id from the name "folders/{folder_id}"
  public folderId?: string;

  // The lifecycle state of the folder such as `ACTIVE` or `DELETE_REQUESTED`.
  public lifecycleState?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The folder’s display name.\nA folder’s display name must be unique amongst its siblings, e.g. no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The resource name of the parent Folder or Organization.\nMust be of the form `folders/{folder_id}` or `organizations/{org_id}`.",
        [],
        true,
        false,
      ),
    ];
  }
}
