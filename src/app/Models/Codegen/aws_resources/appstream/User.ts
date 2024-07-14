import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface UserArgs {
  /*
Email address of the user.

The following arguments are optional:
*/
  userName?: string;

  // Authentication type for the user. You must specify USERPOOL. Valid values: `API`, `SAML`, `USERPOOL`
  authenticationType?: string;

  // Whether the user in the user pool is enabled.
  enabled?: boolean;

  // First name, or given name, of the user.
  firstName?: string;

  // Last name, or surname, of the user.
  lastName?: string;

  // Send an email notification.
  sendEmailNotification?: boolean;
}
export class User extends Resource {
  // Whether the user in the user pool is enabled.
  public enabled?: boolean;

  // First name, or given name, of the user.
  public firstName?: string;

  // Last name, or surname, of the user.
  public lastName?: string;

  // Send an email notification.
  public sendEmailNotification?: boolean;

  /*
Email address of the user.

The following arguments are optional:
*/
  public userName?: string;

  // ARN of the appstream user.
  public arn?: string;

  // Authentication type for the user. You must specify USERPOOL. Valid values: `API`, `SAML`, `USERPOOL`
  public authenticationType?: string;

  // Date and time, in UTC and extended RFC 3339 format, when the user was created.
  public createdTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "sendEmailNotification",
        "Send an email notification.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userName",
        "Email address of the user.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authenticationType",
        "Authentication type for the user. You must specify USERPOOL. Valid values: `API`, `SAML`, `USERPOOL`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether the user in the user pool is enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "firstName",
        "First name, or given name, of the user.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "lastName",
        "Last name, or surname, of the user.",
        [],
        false,
        true,
      ),
    ];
  }
}
