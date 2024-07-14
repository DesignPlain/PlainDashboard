import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface UserGroupArgs {
  // The current supported value is `REDIS`.
  engine?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The ID of the user group.

The following arguments are optional:
*/
  userGroupId?: string;

  // The list of user IDs that belong to the user group.
  userIds?: Array<string>;
}
export class UserGroup extends Resource {
  // The ARN that identifies the user group.
  public arn?: string;

  // The current supported value is `REDIS`.
  public engine?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
The ID of the user group.

The following arguments are optional:
*/
  public userGroupId?: string;

  // The list of user IDs that belong to the user group.
  public userIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "engine",
        "The current supported value is `REDIS`.",
        [],
        true,
        true,
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
        "userGroupId",
        "The ID of the user group.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "userIds",
        "The list of user IDs that belong to the user group.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
