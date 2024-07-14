import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cognito_UserPoolEmailConfiguration {
  // ARN of the SES verified email identity to use. Required if `email_sending_account` is set to `DEVELOPER`.
  sourceArn?: string;

  // Email configuration set name from SES.
  configurationSet?: string;

  // Email delivery method to use. `COGNITO_DEFAULT` for the default email functionality built into Cognito or `DEVELOPER` to use your Amazon SES configuration. Required to be `DEVELOPER` if `from_email_address` is set.
  emailSendingAccount?: string;

  // Sender’s email address or sender’s display name with their email address (e.g., `john@example.com`, `John Smith <john@example.com>` or `\"John Smith Ph.D.\" <john@example.com>`). Escaped double quotes are required around display names that contain certain characters as specified in [RFC 5322](https://tools.ietf.org/html/rfc5322).
  fromEmailAddress?: string;

  // REPLY-TO email address.
  replyToEmailAddress?: string;
}

export function cognito_UserPoolEmailConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fromEmailAddress",
      'Sender’s email address or sender’s display name with their email address (e.g., `john@example.com`, `John Smith <john@example.com>` or `\\"John Smith Ph.D.\\" <john@example.com>`). Escaped double quotes are required around display names that contain certain characters as specified in [RFC 5322](https://tools.ietf.org/html/rfc5322).',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "replyToEmailAddress",
      "REPLY-TO email address.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceArn",
      "ARN of the SES verified email identity to use. Required if `email_sending_account` is set to `DEVELOPER`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "configurationSet",
      "Email configuration set name from SES.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emailSendingAccount",
      "Email delivery method to use. `COGNITO_DEFAULT` for the default email functionality built into Cognito or `DEVELOPER` to use your Amazon SES configuration. Required to be `DEVELOPER` if `from_email_address` is set.",
      [],
      false,
      false,
    ),
  ];
}
