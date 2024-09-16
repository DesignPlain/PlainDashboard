import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apigee_KeystoresAliasesSelfSignedCertSubject {
  // Organization team name. Maximum length is 64 characters.
  orgUnit?: string;

  // State or district name. Maximum length is 128 characters.
  state?: string;

  // Common name of the organization. Maximum length is 64 characters.
  commonName?: string;

  // Two-letter country code. Example, IN for India, US for United States of America.
  countryCode?: string;

  /*
Email address. Max 255 characters.

- - -
*/
  email?: string;

  // City or town name. Maximum length is 128 characters.
  locality?: string;

  // Organization name. Maximum length is 64 characters.
  org?: string;
}

export function apigee_KeystoresAliasesSelfSignedCertSubject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'commonName',
      'Common name of the organization. Maximum length is 64 characters.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'countryCode',
      'Two-letter country code. Example, IN for India, US for United States of America.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'email',
      'Email address. Max 255 characters.\n\n- - -',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'locality',
      'City or town name. Maximum length is 128 characters.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'org',
      'Organization name. Maximum length is 64 characters.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'orgUnit',
      'Organization team name. Maximum length is 64 characters.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      'State or district name. Maximum length is 128 characters.',
      () => [],
      false,
      true,
    ),
  ];
}
