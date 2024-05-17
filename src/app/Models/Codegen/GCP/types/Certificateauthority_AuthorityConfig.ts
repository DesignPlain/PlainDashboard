import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_AuthorityConfigSubjectConfig,
  Certificateauthority_AuthorityConfigSubjectConfig_GetTypes,
} from "./Certificateauthority_AuthorityConfigSubjectConfig";
import {
  Certificateauthority_AuthorityConfigX509Config,
  Certificateauthority_AuthorityConfigX509Config_GetTypes,
} from "./Certificateauthority_AuthorityConfigX509Config";

export interface Certificateauthority_AuthorityConfig {
  /*
Specifies some of the values in a certificate that are related to the subject.
Structure is documented below.


<a name="nested_x509_config"></a>The `x509_config` block supports:
*/
  SubjectConfig?: Certificateauthority_AuthorityConfigSubjectConfig;

  /*
Describes how some of the technical X.509 fields in a certificate should be populated.
Structure is documented below.
*/
  X509Config?: Certificateauthority_AuthorityConfigX509Config;
}

export function Certificateauthority_AuthorityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SubjectConfig",
      'Specifies some of the values in a certificate that are related to the subject.\nStructure is documented below.\n\n\n<a name="nested_x509_config"></a>The `x509_config` block supports:',
      Certificateauthority_AuthorityConfigSubjectConfig_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "X509Config",
      "Describes how some of the technical X.509 fields in a certificate should be populated.\nStructure is documented below.",
      Certificateauthority_AuthorityConfigX509Config_GetTypes(),
      true,
      true,
    ),
  ];
}
