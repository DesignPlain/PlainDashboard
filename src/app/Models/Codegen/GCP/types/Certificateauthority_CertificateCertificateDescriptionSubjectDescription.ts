import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltName,
  Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltName_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltName";
import {
  Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubject,
  Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubject_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubject";

export interface Certificateauthority_CertificateCertificateDescriptionSubjectDescription {
  /*
(Output)
The serial number encoded in lowercase hexadecimal.
*/
  HexSerialNumber?: string;

  /*
The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
*/
  Lifetime?: string;

  /*
(Output)
The time at which the certificate expires.
*/
  NotAfterTime?: string;

  /*
(Output)
The time at which the certificate becomes valid.
*/
  NotBeforeTime?: string;

  /*
The subject alternative name fields.
Structure is documented below.
*/
  SubjectAltNames?: Array<Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltName>;

  /*
Contains distinguished name fields such as the location and organization.
Structure is documented below.
*/
  Subjects?: Array<Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubject>;
}

export function Certificateauthority_CertificateCertificateDescriptionSubjectDescription_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NotAfterTime",
      "(Output)\nThe time at which the certificate expires.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NotBeforeTime",
      "(Output)\nThe time at which the certificate becomes valid.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SubjectAltNames",
      "The subject alternative name fields.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubjectAltName_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Subjects",
      "Contains distinguished name fields such as the location and organization.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionSubjectDescriptionSubject_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HexSerialNumber",
      "(Output)\nThe serial number encoded in lowercase hexadecimal.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Lifetime",
      'The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and\n"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine\nfractional digits, terminated by \'s\'. Example: "3.5s".',
      [],
      false,
      false,
    ),
  ];
}
