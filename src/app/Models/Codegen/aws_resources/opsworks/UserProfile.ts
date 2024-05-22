import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface UserProfileArgs {
  // The user's IAM ARN
  userArn?: string;

  // Whether users can specify their own SSH public key through the My Settings page
  allowSelfManagement?: boolean;

  // The users public key
  sshPublicKey?: string;

  // The ssh username, with witch this user wants to log in
  sshUsername?: string;
}
export class UserProfile extends Resource {
  // The user's IAM ARN
  public userArn?: string;

  // Whether users can specify their own SSH public key through the My Settings page
  public allowSelfManagement?: boolean;

  // The users public key
  public sshPublicKey?: string;

  // The ssh username, with witch this user wants to log in
  public sshUsername?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "userArn",
        "The user's IAM ARN",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowSelfManagement",
        "Whether users can specify their own SSH public key through the My Settings page",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sshPublicKey",
        "The users public key",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sshUsername",
        "The ssh username, with witch this user wants to log in",
        [],
        true,
        false,
      ),
    ];
  }
}
