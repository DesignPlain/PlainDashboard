import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  certificateauthority_CertificateConfigX509ConfigCaOptions,
  certificateauthority_CertificateConfigX509ConfigCaOptions_GetTypes,
} from "./certificateauthority_CertificateConfigX509ConfigCaOptions";
import {
  certificateauthority_CertificateConfigX509ConfigKeyUsage,
  certificateauthority_CertificateConfigX509ConfigKeyUsage_GetTypes,
} from "./certificateauthority_CertificateConfigX509ConfigKeyUsage";
import {
  certificateauthority_CertificateConfigX509ConfigNameConstraints,
  certificateauthority_CertificateConfigX509ConfigNameConstraints_GetTypes,
} from "./certificateauthority_CertificateConfigX509ConfigNameConstraints";
import {
  certificateauthority_CertificateConfigX509ConfigPolicyId,
  certificateauthority_CertificateConfigX509ConfigPolicyId_GetTypes,
} from "./certificateauthority_CertificateConfigX509ConfigPolicyId";
import {
  certificateauthority_CertificateConfigX509ConfigAdditionalExtension,
  certificateauthority_CertificateConfigX509ConfigAdditionalExtension_GetTypes,
} from "./certificateauthority_CertificateConfigX509ConfigAdditionalExtension";

export interface certificateauthority_CertificateConfigX509Config {
  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  caOptions?: certificateauthority_CertificateConfigX509ConfigCaOptions;

  /*
Indicates the intended use for keys that correspond to a certificate.
Structure is documented below.
*/
  keyUsage?: certificateauthority_CertificateConfigX509ConfigKeyUsage;

  /*
Describes the X.509 name constraints extension.
Structure is documented below.
*/
  nameConstraints?: certificateauthority_CertificateConfigX509ConfigNameConstraints;

  /*
Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
Structure is documented below.
*/
  policyIds?: Array<certificateauthority_CertificateConfigX509ConfigPolicyId>;

  /*
Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
Structure is documented below.
*/
  additionalExtensions?: Array<certificateauthority_CertificateConfigX509ConfigAdditionalExtension>;

  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  aiaOcspServers?: Array<string>;
}

export function certificateauthority_CertificateConfigX509Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "additionalExtensions",
      "Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.\nStructure is documented below.",
      certificateauthority_CertificateConfigX509ConfigAdditionalExtension_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aiaOcspServers",
      'Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the\n"Authority Information Access" extension in the certificate.',
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "caOptions",
      "Describes values that are relevant in a CA certificate.\nStructure is documented below.",
      certificateauthority_CertificateConfigX509ConfigCaOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "keyUsage",
      "Indicates the intended use for keys that correspond to a certificate.\nStructure is documented below.",
      certificateauthority_CertificateConfigX509ConfigKeyUsage_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nameConstraints",
      "Describes the X.509 name constraints extension.\nStructure is documented below.",
      certificateauthority_CertificateConfigX509ConfigNameConstraints_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "policyIds",
      "Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.\nStructure is documented below.",
      certificateauthority_CertificateConfigX509ConfigPolicyId_GetTypes(),
      false,
      true,
    ),
  ];
}
