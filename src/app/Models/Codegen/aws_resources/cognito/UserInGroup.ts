import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface UserInGroupArgs {
  // The user pool ID of the user and group.
  userPoolId?: string;

  // The username of the user to be added to the group.
  username?: string;

  // The name of the group to which the user is to be added.
  groupName?: string;
}
export class UserInGroup extends Resource {
  // The name of the group to which the user is to be added.
  public groupName?: string;

  // The user pool ID of the user and group.
  public userPoolId?: string;

  // The username of the user to be added to the group.
  public username?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "userPoolId",
        "The user pool ID of the user and group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "username",
        "The username of the user to be added to the group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "groupName",
        "The name of the group to which the user is to be added.",
        [],
        true,
        true,
      ),
    ];
  }
}
