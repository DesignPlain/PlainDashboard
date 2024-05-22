import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_CertificateConfigSubjectConfigSubject,
  certificateauthority_CertificateConfigSubjectConfigSubject_GetTypes,
} from "./certificateauthority_CertificateConfigSubjectConfigSubject";
import {
  certificateauthority_CertificateConfigSubjectConfigSubjectAltName,
  certificateauthority_CertificateConfigSubjectConfigSubjectAltName_GetTypes,
} from "./certificateauthority_CertificateConfigSubjectConfigSubjectAltName";

export interface certificateauthority_CertificateConfigSubjectConfig {
  /*
Contains distinguished name fields such as the location and organization.
Structure is documented below.
*/
  subject?: certificateauthority_CertificateConfigSubjectConfigSubject;

  /*
The subject alternative name fields.
Structure is documented below.
*/
  subjectAltName?: certificateauthority_CertificateConfigSubjectConfigSubjectAltName;
}

export function certificateauthority_CertificateConfigSubjectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "subjectAltName",
      "The subject alternative name fields.\nStructure is documented below.",
      certificateauthority_CertificateConfigSubjectConfigSubjectAltName_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "subject",
      "Contains distinguished name fields such as the location and organization.\nStructure is documented below.",
      certificateauthority_CertificateConfigSubjectConfigSubject_GetTypes(),
      true,
      true,
    ),
  ];
}
