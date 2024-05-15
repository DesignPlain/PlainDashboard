import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_AuthorityConfigSubjectConfigSubject,
  Certificateauthority_AuthorityConfigSubjectConfigSubject_GetTypes,
} from "./Certificateauthority_AuthorityConfigSubjectConfigSubject";
import {
  Certificateauthority_AuthorityConfigSubjectConfigSubjectAltName,
  Certificateauthority_AuthorityConfigSubjectConfigSubjectAltName_GetTypes,
} from "./Certificateauthority_AuthorityConfigSubjectConfigSubjectAltName";

export interface Certificateauthority_AuthorityConfigSubjectConfig {
  /*
Contains distinguished name fields such as the location and organization.
Structure is documented below.
*/
  Subject?: Certificateauthority_AuthorityConfigSubjectConfigSubject;

  /*
The subject alternative name fields.
Structure is documented below.
*/
  SubjectAltName?: Certificateauthority_AuthorityConfigSubjectConfigSubjectAltName;
}

export function Certificateauthority_AuthorityConfigSubjectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Subject",
      "Contains distinguished name fields such as the location and organization.\nStructure is documented below.",
      Certificateauthority_AuthorityConfigSubjectConfigSubject_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SubjectAltName",
      "The subject alternative name fields.\nStructure is documented below.",
      Certificateauthority_AuthorityConfigSubjectConfigSubjectAltName_GetTypes(),
      false,
      true,
    ),
  ];
}
