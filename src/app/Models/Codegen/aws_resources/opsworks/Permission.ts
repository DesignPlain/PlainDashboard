import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface PermissionArgs {
  // The user's IAM ARN to set permissions for
  userArn?: string;

  // Whether the user is allowed to use SSH to communicate with the instance
  allowSsh?: boolean;

  // Whether the user is allowed to use sudo to elevate privileges
  allowSudo?: boolean;

  // The users permission level. Mus be one of `deny`, `show`, `deploy`, `manage`, `iam_only`
  level?: string;

  // The stack to set the permissions for
  stackId?: string;
}
export class Permission extends Resource {
  // Whether the user is allowed to use SSH to communicate with the instance
  public allowSsh?: boolean;

  // Whether the user is allowed to use sudo to elevate privileges
  public allowSudo?: boolean;

  // The users permission level. Mus be one of `deny`, `show`, `deploy`, `manage`, `iam_only`
  public level?: string;

  // The stack to set the permissions for
  public stackId?: string;

  // The user's IAM ARN to set permissions for
  public userArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "level",
        "The users permission level. Mus be one of `deny`, `show`, `deploy`, `manage`, `iam_only`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "stackId",
        "The stack to set the permissions for",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "userArn",
        "The user's IAM ARN to set permissions for",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowSsh",
        "Whether the user is allowed to use SSH to communicate with the instance",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowSudo",
        "Whether the user is allowed to use sudo to elevate privileges",
        [],
        false,
        false,
      ),
    ];
  }
}
