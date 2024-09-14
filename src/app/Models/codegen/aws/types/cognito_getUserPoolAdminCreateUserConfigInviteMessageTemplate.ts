import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cognito_getUserPoolAdminCreateUserConfigInviteMessageTemplate {
  // - Email message content.
  emailMessage?: string;

  // - Email message subject.
  emailSubject?: string;

  // - SMS message content.
  smsMessage?: string;
}

export function cognito_getUserPoolAdminCreateUserConfigInviteMessageTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "emailMessage",
      "- Email message content.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emailSubject",
      "- Email message subject.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "smsMessage",
      "- SMS message content.",
      () => [],
      true,
      false,
    ),
  ];
}
