import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface UserGroupArgs {
  // The description of the user group.
  description?: string;

  // The name of the user group.
  name?: string;

  // The precedence of the user group.
  precedence?: number;

  // The ARN of the IAM role to be associated with the user group.
  roleArn?: string;

  // The user pool ID.
  userPoolId?: string;
}
export class UserGroup extends Resource {
  // The description of the user group.
  public description?: string;

  // The name of the user group.
  public name?: string;

  // The precedence of the user group.
  public precedence?: number;

  // The ARN of the IAM role to be associated with the user group.
  public roleArn?: string;

  // The user pool ID.
  public userPoolId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the user group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the user group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "precedence",
        "The precedence of the user group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The ARN of the IAM role to be associated with the user group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userPoolId",
        "The user pool ID.",
        [],
        true,
        true,
      ),
    ];
  }
}
