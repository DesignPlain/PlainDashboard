import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface UserGroupMembershipArgs {
  // A list of IAM Groups to add the user to
  groups?: Array<string>;

  // The name of the IAM User to add to groups
  user?: string;
}
export class UserGroupMembership extends Resource {
  // A list of IAM Groups to add the user to
  public groups?: Array<string>;

  // The name of the IAM User to add to groups
  public user?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "groups",
        "A list of IAM Groups to add the user to",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "user",
        "The name of the IAM User to add to groups",
        [],
        true,
        true,
      ),
    ];
  }
}
