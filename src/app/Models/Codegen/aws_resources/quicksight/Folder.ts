import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  quicksight_FolderPermission,
  quicksight_FolderPermission_GetTypes,
} from "../types/quicksight_FolderPermission";

export interface FolderArgs {
  // The type of folder. By default, it is `SHARED`. Valid values are: `SHARED`.
  folderType?: string;

  /*
Display name for the folder.

The following arguments are optional:
*/
  name?: string;

  // The Amazon Resource Name (ARN) for the parent folder. If not set, creates a root-level folder.
  parentFolderArn?: string;

  // A set of resource permissions on the folder. Maximum of 64 items. See permissions.
  permissions?: Array<quicksight_FolderPermission>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // AWS account ID.
  awsAccountId?: string;

  // Identifier for the folder.
  folderId?: string;
}
export class Folder extends Resource {
  // A set of resource permissions on the folder. Maximum of 64 items. See permissions.
  public permissions?: Array<quicksight_FolderPermission>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The type of folder. By default, it is `SHARED`. Valid values are: `SHARED`.
  public folderType?: string;

  // The time that the folder was last updated.
  public lastUpdatedTime?: string;

  // The time that the folder was created.
  public createdTime?: string;

  // Identifier for the folder.
  public folderId?: string;

  // An array of ancestor ARN strings for the folder. Empty for root-level folders.
  public folderPaths?: Array<string>;

  /*
Display name for the folder.

The following arguments are optional:
*/
  public name?: string;

  // The Amazon Resource Name (ARN) for the parent folder. If not set, creates a root-level folder.
  public parentFolderArn?: string;

  // ARN of the folder.
  public arn?: string;

  // AWS account ID.
  public awsAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "folderType",
        "The type of folder. By default, it is `SHARED`. Valid values are: `SHARED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Display name for the folder.\n\nThe following arguments are optional:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parentFolderArn",
        "The Amazon Resource Name (ARN) for the parent folder. If not set, creates a root-level folder.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "permissions",
        "A set of resource permissions on the folder. Maximum of 64 items. See permissions.",
        quicksight_FolderPermission_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "folderId",
        "Identifier for the folder.",
        [],
        true,
        true,
      ),
    ];
  }
}
