import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  certificateauthority_getAuthorityConfigSubjectConfigSubjectAltName,
  certificateauthority_getAuthorityConfigSubjectConfigSubjectAltName_GetTypes,
} from './certificateauthority_getAuthorityConfigSubjectConfigSubjectAltName';
import {
  certificateauthority_getAuthorityConfigSubjectConfigSubject,
  certificateauthority_getAuthorityConfigSubjectConfigSubject_GetTypes,
} from './certificateauthority_getAuthorityConfigSubjectConfigSubject';

export interface certificateauthority_getAuthorityConfigSubjectConfig {
  // The subject alternative name fields.
  subjectAltNames?: Array<certificateauthority_getAuthorityConfigSubjectConfigSubjectAltName>;

  // Contains distinguished name fields such as the location and organization.
  subjects?: Array<certificateauthority_getAuthorityConfigSubjectConfigSubject>;
}

export function certificateauthority_getAuthorityConfigSubjectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'subjectAltNames',
      'The subject alternative name fields.',
      () =>
        certificateauthority_getAuthorityConfigSubjectConfigSubjectAltName_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subjects',
      'Contains distinguished name fields such as the location and organization.',
      () =>
        certificateauthority_getAuthorityConfigSubjectConfigSubject_GetTypes(),
      true,
      false,
    ),
  ];
}
