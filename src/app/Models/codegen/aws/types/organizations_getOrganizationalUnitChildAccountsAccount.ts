import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface organizations_getOrganizationalUnitChildAccountsAccount {
  // The Amazon Resource Name (ARN) of the account.
  arn?: string;

  // The email address associated with the AWS account.
  email?: string;

  // Parent identifier of the organizational units.
  id?: string;

  // The friendly name of the account.
  name?: string;

  // The status of the account in the organization.
  status?: string;
}

export function organizations_getOrganizationalUnitChildAccountsAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The friendly name of the account.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'status',
      'The status of the account in the organization.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'arn',
      'The Amazon Resource Name (ARN) of the account.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'email',
      'The email address associated with the AWS account.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      'Parent identifier of the organizational units.',
      () => [],
      true,
      false,
    ),
  ];
}
