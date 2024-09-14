import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  certificateauthority_getAuthorityConfigSubjectConfig,
  certificateauthority_getAuthorityConfigSubjectConfig_GetTypes,
} from "./certificateauthority_getAuthorityConfigSubjectConfig";
import {
  certificateauthority_getAuthorityConfigX509Config,
  certificateauthority_getAuthorityConfigX509Config_GetTypes,
} from "./certificateauthority_getAuthorityConfigX509Config";

export interface certificateauthority_getAuthorityConfig {
  // Specifies some of the values in a certificate that are related to the subject.
  subjectConfigs?: Array<certificateauthority_getAuthorityConfigSubjectConfig>;

  // Describes how some of the technical X.509 fields in a certificate should be populated.
  x509Configs?: Array<certificateauthority_getAuthorityConfigX509Config>;
}

export function certificateauthority_getAuthorityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subjectConfigs",
      "Specifies some of the values in a certificate that are related to the subject.",
      () => certificateauthority_getAuthorityConfigSubjectConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "x509Configs",
      "Describes how some of the technical X.509 fields in a certificate should be populated.",
      () => certificateauthority_getAuthorityConfigX509Config_GetTypes(),
      true,
      false,
    ),
  ];
}
