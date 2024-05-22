import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cognito_UserPoolAdminCreateUserConfigInviteMessageTemplate {
  // Message template for email messages. Must contain `{username}` and `{####}` placeholders, for username and temporary password, respectively.
  emailMessage?: string;

  // Subject line for email messages.
  emailSubject?: string;

  // Message template for SMS messages. Must contain `{username}` and `{####}` placeholders, for username and temporary password, respectively.
  smsMessage?: string;
}

export function cognito_UserPoolAdminCreateUserConfigInviteMessageTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "emailMessage",
      "Message template for email messages. Must contain `{username}` and `{####}` placeholders, for username and temporary password, respectively.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emailSubject",
      "Subject line for email messages.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "smsMessage",
      "Message template for SMS messages. Must contain `{username}` and `{####}` placeholders, for username and temporary password, respectively.",
      [],
      false,
      false,
    ),
  ];
}
