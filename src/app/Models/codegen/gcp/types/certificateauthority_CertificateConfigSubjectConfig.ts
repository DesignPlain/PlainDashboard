import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  certificateauthority_CertificateConfigSubjectConfigSubjectAltName,
  certificateauthority_CertificateConfigSubjectConfigSubjectAltName_GetTypes,
} from "./certificateauthority_CertificateConfigSubjectConfigSubjectAltName";
import {
  certificateauthority_CertificateConfigSubjectConfigSubject,
  certificateauthority_CertificateConfigSubjectConfigSubject_GetTypes,
} from "./certificateauthority_CertificateConfigSubjectConfigSubject";

export interface certificateauthority_CertificateConfigSubjectConfig {
  /*
The subject alternative name fields.
Structure is documented below.
*/
  subjectAltName?: certificateauthority_CertificateConfigSubjectConfigSubjectAltName;

  /*
Contains distinguished name fields such as the location and organization.
Structure is documented below.
*/
  subject?: certificateauthority_CertificateConfigSubjectConfigSubject;
}

export function certificateauthority_CertificateConfigSubjectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "subjectAltName",
      "The subject alternative name fields.\nStructure is documented below.",
      () =>
        certificateauthority_CertificateConfigSubjectConfigSubjectAltName_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "subject",
      "Contains distinguished name fields such as the location and organization.\nStructure is documented below.",
      () =>
        certificateauthority_CertificateConfigSubjectConfigSubject_GetTypes(),
      true,
      true,
    ),
  ];
}
