import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface certificateauthority_AuthorityConfigSubjectConfigSubject {
  // The postal code of the subject.
  postalCode?: string;

  // The province, territory, or regional state of the subject.
  province?: string;

  // The street address of the subject.
  streetAddress?: string;

  // The common name of the distinguished name.
  commonName?: string;

  // The country code of the subject.
  countryCode?: string;

  // The locality or city of the subject.
  locality?: string;

  // The organization of the subject.
  organization?: string;

  // The organizational unit of the subject.
  organizationalUnit?: string;
}

export function certificateauthority_AuthorityConfigSubjectConfigSubject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'organization',
      'The organization of the subject.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'organizationalUnit',
      'The organizational unit of the subject.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'postalCode',
      'The postal code of the subject.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'province',
      'The province, territory, or regional state of the subject.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'streetAddress',
      'The street address of the subject.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'commonName',
      'The common name of the distinguished name.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'countryCode',
      'The country code of the subject.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'locality',
      'The locality or city of the subject.',
      () => [],
      false,
      true,
    ),
  ];
}
