import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltName,
  certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltName_GetTypes,
} from './certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltName';
import {
  certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubject,
  certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubject_GetTypes,
} from './certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubject';

export interface certificateauthority_CertificateCertificateDescriptionSubjectDescription {
  /*
The subject alternative name fields.
Structure is documented below.
*/
  subjectAltNames?: Array<certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltName>;

  /*
Contains distinguished name fields such as the location and organization.
Structure is documented below.
*/
  subjects?: Array<certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubject>;

  /*
(Output)
The serial number encoded in lowercase hexadecimal.
*/
  hexSerialNumber?: string;

  /*
The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
*/
  lifetime?: string;

  /*
(Output)
The time at which the certificate expires.
*/
  notAfterTime?: string;

  /*
(Output)
The time at which the certificate becomes valid.
*/
  notBeforeTime?: string;
}

export function certificateauthority_CertificateCertificateDescriptionSubjectDescription_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'lifetime',
      'The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and\n"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine\nfractional digits, terminated by \'s\'. Example: "3.5s".',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'notAfterTime',
      '(Output)\nThe time at which the certificate expires.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'notBeforeTime',
      '(Output)\nThe time at which the certificate becomes valid.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subjectAltNames',
      'The subject alternative name fields.\nStructure is documented below.',
      () =>
        certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltName_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subjects',
      'Contains distinguished name fields such as the location and organization.\nStructure is documented below.',
      () =>
        certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubject_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'hexSerialNumber',
      '(Output)\nThe serial number encoded in lowercase hexadecimal.',
      () => [],
      false,
      false,
    ),
  ];
}
