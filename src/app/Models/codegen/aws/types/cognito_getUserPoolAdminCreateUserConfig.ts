import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cognito_getUserPoolAdminCreateUserConfigInviteMessageTemplate,
  cognito_getUserPoolAdminCreateUserConfigInviteMessageTemplate_GetTypes,
} from './cognito_getUserPoolAdminCreateUserConfigInviteMessageTemplate';

export interface cognito_getUserPoolAdminCreateUserConfig {
  // - Whether only admins can create users.
  allowAdminCreateUserOnly?: boolean;

  //
  inviteMessageTemplates?: Array<cognito_getUserPoolAdminCreateUserConfigInviteMessageTemplate>;

  /*
- Number of days an unconfirmed user account remains valid.
- invite_message_template - Templates for invitation messages.
*/
  unusedAccountValidityDays?: number;
}

export function cognito_getUserPoolAdminCreateUserConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'unusedAccountValidityDays',
      '- Number of days an unconfirmed user account remains valid.\n* invite_message_template\u00a0- Templates for invitation messages.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowAdminCreateUserOnly',
      '- Whether only admins can create users.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'inviteMessageTemplates',
      '',
      () =>
        cognito_getUserPoolAdminCreateUserConfigInviteMessageTemplate_GetTypes(),
      true,
      false,
    ),
  ];
}
