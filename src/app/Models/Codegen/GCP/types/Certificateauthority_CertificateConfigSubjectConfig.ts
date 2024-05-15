import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateConfigSubjectConfigSubject,
  Certificateauthority_CertificateConfigSubjectConfigSubject_GetTypes,
} from "./Certificateauthority_CertificateConfigSubjectConfigSubject";
import {
  Certificateauthority_CertificateConfigSubjectConfigSubjectAltName,
  Certificateauthority_CertificateConfigSubjectConfigSubjectAltName_GetTypes,
} from "./Certificateauthority_CertificateConfigSubjectConfigSubjectAltName";

export interface Certificateauthority_CertificateConfigSubjectConfig {
  /*
Contains distinguished name fields such as the location and organization.
Structure is documented below.
*/
  Subject?: Certificateauthority_CertificateConfigSubjectConfigSubject;

  /*
The subject alternative name fields.
Structure is documented below.
*/
  SubjectAltName?: Certificateauthority_CertificateConfigSubjectConfigSubjectAltName;
}

export function Certificateauthority_CertificateConfigSubjectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Subject",
      "Contains distinguished name fields such as the location and organization.\nStructure is documented below.",
      Certificateauthority_CertificateConfigSubjectConfigSubject_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SubjectAltName",
      "The subject alternative name fields.\nStructure is documented below.",
      Certificateauthority_CertificateConfigSubjectConfigSubjectAltName_GetTypes(),
      false,
      true,
    ),
  ];
}
