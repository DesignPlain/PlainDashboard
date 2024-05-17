import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_getAuthorityConfigSubjectConfigSubjectAltName,
  Certificateauthority_getAuthorityConfigSubjectConfigSubjectAltName_GetTypes,
} from "./Certificateauthority_getAuthorityConfigSubjectConfigSubjectAltName";
import {
  Certificateauthority_getAuthorityConfigSubjectConfigSubject,
  Certificateauthority_getAuthorityConfigSubjectConfigSubject_GetTypes,
} from "./Certificateauthority_getAuthorityConfigSubjectConfigSubject";

export interface Certificateauthority_getAuthorityConfigSubjectConfig {
  // The subject alternative name fields.
  SubjectAltNames?: Array<Certificateauthority_getAuthorityConfigSubjectConfigSubjectAltName>;

  // Contains distinguished name fields such as the location and organization.
  Subjects?: Array<Certificateauthority_getAuthorityConfigSubjectConfigSubject>;
}

export function Certificateauthority_getAuthorityConfigSubjectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Subjects",
      "Contains distinguished name fields such as the location and organization.",
      Certificateauthority_getAuthorityConfigSubjectConfigSubject_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SubjectAltNames",
      "The subject alternative name fields.",
      Certificateauthority_getAuthorityConfigSubjectConfigSubjectAltName_GetTypes(),
      true,
      false,
    ),
  ];
}
