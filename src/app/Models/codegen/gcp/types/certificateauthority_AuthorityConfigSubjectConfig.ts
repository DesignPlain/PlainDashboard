import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  certificateauthority_AuthorityConfigSubjectConfigSubject,
  certificateauthority_AuthorityConfigSubjectConfigSubject_GetTypes,
} from "./certificateauthority_AuthorityConfigSubjectConfigSubject";
import {
  certificateauthority_AuthorityConfigSubjectConfigSubjectAltName,
  certificateauthority_AuthorityConfigSubjectConfigSubjectAltName_GetTypes,
} from "./certificateauthority_AuthorityConfigSubjectConfigSubjectAltName";

export interface certificateauthority_AuthorityConfigSubjectConfig {
  /*
Contains distinguished name fields such as the location and organization.
Structure is documented below.
*/
  subject?: certificateauthority_AuthorityConfigSubjectConfigSubject;

  /*
The subject alternative name fields.
Structure is documented below.
*/
  subjectAltName?: certificateauthority_AuthorityConfigSubjectConfigSubjectAltName;
}

export function certificateauthority_AuthorityConfigSubjectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "subject",
      "Contains distinguished name fields such as the location and organization.\nStructure is documented below.",
      () => certificateauthority_AuthorityConfigSubjectConfigSubject_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "subjectAltName",
      "The subject alternative name fields.\nStructure is documented below.",
      () =>
        certificateauthority_AuthorityConfigSubjectConfigSubjectAltName_GetTypes(),
      false,
      true,
    ),
  ];
}
