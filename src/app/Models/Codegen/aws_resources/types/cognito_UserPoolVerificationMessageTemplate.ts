import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cognito_UserPoolVerificationMessageTemplate {
  // Subject line for the email message template for sending a confirmation link to the user.
  emailSubjectByLink?: string;

  // SMS message template. Must contain the `{####}` placeholder. Conflicts with `sms_verification_message` argument.
  smsMessage?: string;

  // Default email option. Must be either `CONFIRM_WITH_CODE` or `CONFIRM_WITH_LINK`. Defaults to `CONFIRM_WITH_CODE`.
  defaultEmailOption?: string;

  // Email message template. Must contain the `{####}` placeholder. Conflicts with `email_verification_message` argument.
  emailMessage?: string;

  // Email message template for sending a confirmation link to the user, it must contain the `{##Click Here##}` placeholder.
  emailMessageByLink?: string;

  // Subject line for the email message template. Conflicts with `email_verification_subject` argument.
  emailSubject?: string;
}

export function cognito_UserPoolVerificationMessageTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "emailSubject",
      "Subject line for the email message template. Conflicts with `email_verification_subject` argument.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emailSubjectByLink",
      "Subject line for the email message template for sending a confirmation link to the user.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "smsMessage",
      "SMS message template. Must contain the `{####}` placeholder. Conflicts with `sms_verification_message` argument.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultEmailOption",
      "Default email option. Must be either `CONFIRM_WITH_CODE` or `CONFIRM_WITH_LINK`. Defaults to `CONFIRM_WITH_CODE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emailMessage",
      "Email message template. Must contain the `{####}` placeholder. Conflicts with `email_verification_message` argument.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emailMessageByLink",
      "Email message template for sending a confirmation link to the user, it must contain the `{##Click Here##}` placeholder.",
      [],
      false,
      false,
    ),
  ];
}
