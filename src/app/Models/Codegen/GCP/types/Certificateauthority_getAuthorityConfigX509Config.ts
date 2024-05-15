import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension,
  Certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension_GetTypes,
} from "./Certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension";
import {
  Certificateauthority_getAuthorityConfigX509ConfigCaOption,
  Certificateauthority_getAuthorityConfigX509ConfigCaOption_GetTypes,
} from "./Certificateauthority_getAuthorityConfigX509ConfigCaOption";
import {
  Certificateauthority_getAuthorityConfigX509ConfigKeyUsage,
  Certificateauthority_getAuthorityConfigX509ConfigKeyUsage_GetTypes,
} from "./Certificateauthority_getAuthorityConfigX509ConfigKeyUsage";
import {
  Certificateauthority_getAuthorityConfigX509ConfigNameConstraint,
  Certificateauthority_getAuthorityConfigX509ConfigNameConstraint_GetTypes,
} from "./Certificateauthority_getAuthorityConfigX509ConfigNameConstraint";
import {
  Certificateauthority_getAuthorityConfigX509ConfigPolicyId,
  Certificateauthority_getAuthorityConfigX509ConfigPolicyId_GetTypes,
} from "./Certificateauthority_getAuthorityConfigX509ConfigPolicyId";

export interface Certificateauthority_getAuthorityConfigX509Config {
  // Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
  AdditionalExtensions?: Array<Certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension>;

  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  AiaOcspServers?: Array<string>;

  // Describes values that are relevant in a CA certificate.
  CaOptions?: Array<Certificateauthority_getAuthorityConfigX509ConfigCaOption>;

  // Indicates the intended use for keys that correspond to a certificate.
  KeyUsages?: Array<Certificateauthority_getAuthorityConfigX509ConfigKeyUsage>;

  // Describes the X.509 name constraints extension.
  NameConstraints?: Array<Certificateauthority_getAuthorityConfigX509ConfigNameConstraint>;

  // Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
  PolicyIds?: Array<Certificateauthority_getAuthorityConfigX509ConfigPolicyId>;
}

export function Certificateauthority_getAuthorityConfigX509Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AiaOcspServers",
      'Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the\n"Authority Information Access" extension in the certificate.',
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "CaOptions",
      "Describes values that are relevant in a CA certificate.",
      Certificateauthority_getAuthorityConfigX509ConfigCaOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "KeyUsages",
      "Indicates the intended use for keys that correspond to a certificate.",
      Certificateauthority_getAuthorityConfigX509ConfigKeyUsage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NameConstraints",
      "Describes the X.509 name constraints extension.",
      Certificateauthority_getAuthorityConfigX509ConfigNameConstraint_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PolicyIds",
      "Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.",
      Certificateauthority_getAuthorityConfigX509ConfigPolicyId_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalExtensions",
      "Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.",
      Certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension_GetTypes(),
      true,
      false,
    ),
  ];
}
