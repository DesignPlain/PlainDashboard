import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_AuthorityConfigSubjectConfig,
  certificateauthority_AuthorityConfigSubjectConfig_GetTypes,
} from "./certificateauthority_AuthorityConfigSubjectConfig";
import {
  certificateauthority_AuthorityConfigX509Config,
  certificateauthority_AuthorityConfigX509Config_GetTypes,
} from "./certificateauthority_AuthorityConfigX509Config";

export interface certificateauthority_AuthorityConfig {
  /*
Specifies some of the values in a certificate that are related to the subject.
Structure is documented below.


<a name="nested_x509_config"></a>The `x509_config` block supports:
*/
  subjectConfig?: certificateauthority_AuthorityConfigSubjectConfig;

  /*
Describes how some of the technical X.509 fields in a certificate should be populated.
Structure is documented below.
*/
  x509Config?: certificateauthority_AuthorityConfigX509Config;
}

export function certificateauthority_AuthorityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "x509Config",
      "Describes how some of the technical X.509 fields in a certificate should be populated.\nStructure is documented below.",
      certificateauthority_AuthorityConfigX509Config_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "subjectConfig",
      'Specifies some of the values in a certificate that are related to the subject.\nStructure is documented below.\n\n\n<a name="nested_x509_config"></a>The `x509_config` block supports:',
      certificateauthority_AuthorityConfigSubjectConfig_GetTypes(),
      true,
      true,
    ),
  ];
}
