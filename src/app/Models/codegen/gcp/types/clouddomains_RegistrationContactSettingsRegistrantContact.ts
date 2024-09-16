import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  clouddomains_RegistrationContactSettingsRegistrantContactPostalAddress,
  clouddomains_RegistrationContactSettingsRegistrantContactPostalAddress_GetTypes,
} from './clouddomains_RegistrationContactSettingsRegistrantContactPostalAddress';

export interface clouddomains_RegistrationContactSettingsRegistrantContact {
  // Fax number of the contact in international format. For example, "+1-800-555-0123".
  faxNumber?: string;

  // Required. Phone number of the contact in international format. For example, "+1-800-555-0123".
  phoneNumber?: string;

  /*
Required. Postal address of the contact.
Structure is documented below.
*/
  postalAddress?: clouddomains_RegistrationContactSettingsRegistrantContactPostalAddress;

  // Required. Email address of the contact.
  email?: string;
}

export function clouddomains_RegistrationContactSettingsRegistrantContact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'faxNumber',
      'Fax number of the contact in international format. For example, "+1-800-555-0123".',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'phoneNumber',
      'Required. Phone number of the contact in international format. For example, "+1-800-555-0123".',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'postalAddress',
      'Required. Postal address of the contact.\nStructure is documented below.',
      () =>
        clouddomains_RegistrationContactSettingsRegistrantContactPostalAddress_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'email',
      'Required. Email address of the contact.',
      () => [],
      true,
      true,
    ),
  ];
}
