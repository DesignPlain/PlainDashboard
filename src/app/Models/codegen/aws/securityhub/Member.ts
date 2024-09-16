import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface MemberArgs {
  // Boolean whether to invite the account to Security Hub as a member. Defaults to `false`.
  invite?: boolean;

  // The ID of the member AWS account.
  accountId?: string;

  // The email of the member AWS account.
  email?: string;
}
export class Member extends DS_Resource {
  // Boolean whether to invite the account to Security Hub as a member. Defaults to `false`.
  public invite?: boolean;

  // The ID of the master Security Hub AWS account.
  public masterId?: string;

  // The status of the member account relationship.
  public memberStatus?: string;

  // The ID of the member AWS account.
  public accountId?: string;

  // The email of the member AWS account.
  public email?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'invite',
        'Boolean whether to invite the account to Security Hub as a member. Defaults to `false`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'accountId',
        'The ID of the member AWS account.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'email',
        'The email of the member AWS account.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
