import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_getAuthorityConfigSubjectConfig,
  Certificateauthority_getAuthorityConfigSubjectConfig_GetTypes,
} from "./Certificateauthority_getAuthorityConfigSubjectConfig";
import {
  Certificateauthority_getAuthorityConfigX509Config,
  Certificateauthority_getAuthorityConfigX509Config_GetTypes,
} from "./Certificateauthority_getAuthorityConfigX509Config";

export interface Certificateauthority_getAuthorityConfig {
  // Specifies some of the values in a certificate that are related to the subject.
  SubjectConfigs?: Array<Certificateauthority_getAuthorityConfigSubjectConfig>;

  // Describes how some of the technical X.509 fields in a certificate should be populated.
  X509Configs?: Array<Certificateauthority_getAuthorityConfigX509Config>;
}

export function Certificateauthority_getAuthorityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SubjectConfigs",
      "Specifies some of the values in a certificate that are related to the subject.",
      Certificateauthority_getAuthorityConfigSubjectConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "X509Configs",
      "Describes how some of the technical X.509 fields in a certificate should be populated.",
      Certificateauthority_getAuthorityConfigX509Config_GetTypes(),
      true,
      false,
    ),
  ];
}
