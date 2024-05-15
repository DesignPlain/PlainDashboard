import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateConfigSubjectConfig,
  Certificateauthority_CertificateConfigSubjectConfig_GetTypes,
} from "./Certificateauthority_CertificateConfigSubjectConfig";
import {
  Certificateauthority_CertificateConfigX509Config,
  Certificateauthority_CertificateConfigX509Config_GetTypes,
} from "./Certificateauthority_CertificateConfigX509Config";
import {
  Certificateauthority_CertificateConfigPublicKey,
  Certificateauthority_CertificateConfigPublicKey_GetTypes,
} from "./Certificateauthority_CertificateConfigPublicKey";

export interface Certificateauthority_CertificateConfig {
  /*
A PublicKey describes a public key.
Structure is documented below.


<a name="nested_x509_config"></a>The `x509_config` block supports:
*/
  PublicKey?: Certificateauthority_CertificateConfigPublicKey;

  /*
Specifies some of the values in a certificate that are related to the subject.
Structure is documented below.
*/
  SubjectConfig?: Certificateauthority_CertificateConfigSubjectConfig;

  /*
Describes how some of the technical X.509 fields in a certificate should be populated.
Structure is documented below.
*/
  X509Config?: Certificateauthority_CertificateConfigX509Config;
}

export function Certificateauthority_CertificateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PublicKey",
      'A PublicKey describes a public key.\nStructure is documented below.\n\n\n<a name="nested_x509_config"></a>The `x509_config` block supports:',
      Certificateauthority_CertificateConfigPublicKey_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SubjectConfig",
      "Specifies some of the values in a certificate that are related to the subject.\nStructure is documented below.",
      Certificateauthority_CertificateConfigSubjectConfig_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "X509Config",
      "Describes how some of the technical X.509 fields in a certificate should be populated.\nStructure is documented below.",
      Certificateauthority_CertificateConfigX509Config_GetTypes(),
      true,
      true,
    ),
  ];
}
