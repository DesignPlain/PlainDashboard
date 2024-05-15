import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateConfigX509ConfigCaOptions,
  Certificateauthority_CertificateConfigX509ConfigCaOptions_GetTypes,
} from "./Certificateauthority_CertificateConfigX509ConfigCaOptions";
import {
  Certificateauthority_CertificateConfigX509ConfigKeyUsage,
  Certificateauthority_CertificateConfigX509ConfigKeyUsage_GetTypes,
} from "./Certificateauthority_CertificateConfigX509ConfigKeyUsage";
import {
  Certificateauthority_CertificateConfigX509ConfigNameConstraints,
  Certificateauthority_CertificateConfigX509ConfigNameConstraints_GetTypes,
} from "./Certificateauthority_CertificateConfigX509ConfigNameConstraints";
import {
  Certificateauthority_CertificateConfigX509ConfigPolicyId,
  Certificateauthority_CertificateConfigX509ConfigPolicyId_GetTypes,
} from "./Certificateauthority_CertificateConfigX509ConfigPolicyId";
import {
  Certificateauthority_CertificateConfigX509ConfigAdditionalExtension,
  Certificateauthority_CertificateConfigX509ConfigAdditionalExtension_GetTypes,
} from "./Certificateauthority_CertificateConfigX509ConfigAdditionalExtension";

export interface Certificateauthority_CertificateConfigX509Config {
  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  CaOptions?: Certificateauthority_CertificateConfigX509ConfigCaOptions;

  /*
Indicates the intended use for keys that correspond to a certificate.
Structure is documented below.
*/
  KeyUsage?: Certificateauthority_CertificateConfigX509ConfigKeyUsage;

  /*
Describes the X.509 name constraints extension.
Structure is documented below.
*/
  NameConstraints?: Certificateauthority_CertificateConfigX509ConfigNameConstraints;

  /*
Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
Structure is documented below.
*/
  PolicyIds?: Array<Certificateauthority_CertificateConfigX509ConfigPolicyId>;

  /*
Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
Structure is documented below.
*/
  AdditionalExtensions?: Array<Certificateauthority_CertificateConfigX509ConfigAdditionalExtension>;

  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  AiaOcspServers?: Array<string>;
}

export function Certificateauthority_CertificateConfigX509Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CaOptions",
      "Describes values that are relevant in a CA certificate.\nStructure is documented below.",
      Certificateauthority_CertificateConfigX509ConfigCaOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "KeyUsage",
      "Indicates the intended use for keys that correspond to a certificate.\nStructure is documented below.",
      Certificateauthority_CertificateConfigX509ConfigKeyUsage_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NameConstraints",
      "Describes the X.509 name constraints extension.\nStructure is documented below.",
      Certificateauthority_CertificateConfigX509ConfigNameConstraints_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PolicyIds",
      "Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.\nStructure is documented below.",
      Certificateauthority_CertificateConfigX509ConfigPolicyId_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalExtensions",
      "Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.\nStructure is documented below.",
      Certificateauthority_CertificateConfigX509ConfigAdditionalExtension_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AiaOcspServers",
      'Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the\n"Authority Information Access" extension in the certificate.',
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
