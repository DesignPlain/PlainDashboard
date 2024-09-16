import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface identitystore_UserAddresses {
  // The country that this address is in.
  country?: string;

  // The name that is typically displayed when the address is shown for display.
  formatted?: string;

  // The address locality.
  locality?: string;

  // The postal code of the address.
  postalCode?: string;

  // When `true`, this is the primary address associated with the user.
  primary?: boolean;

  // The region of the address.
  region?: string;

  // The street of the address.
  streetAddress?: string;

  // The type of address.
  type?: string;
}

export function identitystore_UserAddresses_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'locality',
      'The address locality.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'postalCode',
      'The postal code of the address.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'primary',
      'When `true`, this is the primary address associated with the user.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'region',
      'The region of the address.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'streetAddress',
      'The street of the address.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of address.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'country',
      'The country that this address is in.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'formatted',
      'The name that is typically displayed when the address is shown for display.',
      () => [],
      false,
      false,
    ),
  ];
}
