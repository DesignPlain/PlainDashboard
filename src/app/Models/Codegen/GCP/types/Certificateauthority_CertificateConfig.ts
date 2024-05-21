import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_CertificateConfigPublicKey,
  certificateauthority_CertificateConfigPublicKey_GetTypes,
} from "./certificateauthority_CertificateConfigPublicKey";
import {
  certificateauthority_CertificateConfigSubjectConfig,
  certificateauthority_CertificateConfigSubjectConfig_GetTypes,
} from "./certificateauthority_CertificateConfigSubjectConfig";
import {
  certificateauthority_CertificateConfigX509Config,
  certificateauthority_CertificateConfigX509Config_GetTypes,
} from "./certificateauthority_CertificateConfigX509Config";

export interface certificateauthority_CertificateConfig {
  /*
A PublicKey describes a public key.
Structure is documented below.


<a name="nested_x509_config"></a>The `x509_config` block supports:
*/
  publicKey?: certificateauthority_CertificateConfigPublicKey;

  /*
Specifies some of the values in a certificate that are related to the subject.
Structure is documented below.
*/
  subjectConfig?: certificateauthority_CertificateConfigSubjectConfig;

  /*
Describes how some of the technical X.509 fields in a certificate should be populated.
Structure is documented below.
*/
  x509Config?: certificateauthority_CertificateConfigX509Config;
}

export function certificateauthority_CertificateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "x509Config",
      "Describes how some of the technical X.509 fields in a certificate should be populated.\nStructure is documented below.",
      certificateauthority_CertificateConfigX509Config_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "publicKey",
      'A PublicKey describes a public key.\nStructure is documented below.\n\n\n<a name="nested_x509_config"></a>The `x509_config` block supports:',
      certificateauthority_CertificateConfigPublicKey_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "subjectConfig",
      "Specifies some of the values in a certificate that are related to the subject.\nStructure is documented below.",
      certificateauthority_CertificateConfigSubjectConfig_GetTypes(),
      true,
      true,
    ),
  ];
}
