import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface identitystore_getUserName {
  // The family name of the user.
  familyName?: string;

  // The name that is typically displayed when the name is shown for display.
  formatted?: string;

  // The given name of the user.
  givenName?: string;

  // The honorific prefix of the user.
  honorificPrefix?: string;

  // The honorific suffix of the user.
  honorificSuffix?: string;

  // The middle name of the user.
  middleName?: string;
}

export function identitystore_getUserName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'honorificPrefix',
      'The honorific prefix of the user.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'honorificSuffix',
      'The honorific suffix of the user.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'middleName',
      'The middle name of the user.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'familyName',
      'The family name of the user.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'formatted',
      'The name that is typically displayed when the name is shown for display.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'givenName',
      'The given name of the user.',
      () => [],
      true,
      false,
    ),
  ];
}
