import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cognito_getUserPoolEmailConfiguration {
  // - Configuration set used for sending emails.
  configurationSet?: string;

  // - Email sending account.
  emailSendingAccount?: string;

  // - Email sender address.
  from?: string;

  // - Reply-to email address.
  replyToEmailAddress?: string;

  // - Source Amazon Resource Name (ARN) for emails.
  sourceArn?: string;
}

export function cognito_getUserPoolEmailConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sourceArn',
      '- Source Amazon Resource Name (ARN) for emails.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'configurationSet',
      '- Configuration set used for sending emails.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'emailSendingAccount',
      '- Email sending account.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'from',
      '- Email sender address.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'replyToEmailAddress',
      '- Reply-to email address.',
      () => [],
      true,
      false,
    ),
  ];
}
