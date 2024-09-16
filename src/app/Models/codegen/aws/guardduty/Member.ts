import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface MemberArgs {
  // AWS account ID for member account.
  accountId?: string;

  // The detector ID of the GuardDuty account where you want to create member accounts.
  detectorId?: string;

  // Boolean whether an email notification is sent to the accounts. Defaults to `false`.
  disableEmailNotification?: boolean;

  // Email address for member account.
  email?: string;

  // Message for invitation.
  invitationMessage?: string;

  // Boolean whether to invite the account to GuardDuty as a member. Defaults to `false`. To detect if an invitation needs to be (re-)sent, the this provider state value is `true` based on a `relationship_status` of `Disabled`, `Enabled`, `Invited`, or `EmailVerificationInProgress`.
  invite?: boolean;
}
export class Member extends DS_Resource {
  // The status of the relationship between the member account and its primary account. More information can be found in [Amazon GuardDuty API Reference](https://docs.aws.amazon.com/guardduty/latest/ug/get-members.html).
  public relationshipStatus?: string;

  // AWS account ID for member account.
  public accountId?: string;

  // The detector ID of the GuardDuty account where you want to create member accounts.
  public detectorId?: string;

  // Boolean whether an email notification is sent to the accounts. Defaults to `false`.
  public disableEmailNotification?: boolean;

  // Email address for member account.
  public email?: string;

  // Message for invitation.
  public invitationMessage?: string;

  // Boolean whether to invite the account to GuardDuty as a member. Defaults to `false`. To detect if an invitation needs to be (re-)sent, the this provider state value is `true` based on a `relationship_status` of `Disabled`, `Enabled`, `Invited`, or `EmailVerificationInProgress`.
  public invite?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'email',
        'Email address for member account.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'invitationMessage',
        'Message for invitation.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'invite',
        'Boolean whether to invite the account to GuardDuty as a member. Defaults to `false`. To detect if an invitation needs to be (re-)sent, the this provider state value is `true` based on a `relationship_status` of `Disabled`, `Enabled`, `Invited`, or `EmailVerificationInProgress`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'accountId',
        'AWS account ID for member account.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'detectorId',
        'The detector ID of the GuardDuty account where you want to create member accounts.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'disableEmailNotification',
        'Boolean whether an email notification is sent to the accounts. Defaults to `false`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
