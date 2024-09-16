import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface organizations_OrganizationalUnitAccount {
  // ARN of the organizational unit
  arn?: string;

  // Email of the account
  email?: string;

  // Identifier of the organization unit
  id?: string;

  // The name for the organizational unit
  name?: string;
}

export function organizations_OrganizationalUnitAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'arn',
      'ARN of the organizational unit',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'email',
      'Email of the account',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      'Identifier of the organization unit',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name for the organizational unit',
      () => [],
      false,
      false,
    ),
  ];
}
