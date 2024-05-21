import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_getAuthorityConfigX509ConfigNameConstraint,
  certificateauthority_getAuthorityConfigX509ConfigNameConstraint_GetTypes,
} from "./certificateauthority_getAuthorityConfigX509ConfigNameConstraint";
import {
  certificateauthority_getAuthorityConfigX509ConfigPolicyId,
  certificateauthority_getAuthorityConfigX509ConfigPolicyId_GetTypes,
} from "./certificateauthority_getAuthorityConfigX509ConfigPolicyId";
import {
  certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension,
  certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension_GetTypes,
} from "./certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension";
import {
  certificateauthority_getAuthorityConfigX509ConfigCaOption,
  certificateauthority_getAuthorityConfigX509ConfigCaOption_GetTypes,
} from "./certificateauthority_getAuthorityConfigX509ConfigCaOption";
import {
  certificateauthority_getAuthorityConfigX509ConfigKeyUsage,
  certificateauthority_getAuthorityConfigX509ConfigKeyUsage_GetTypes,
} from "./certificateauthority_getAuthorityConfigX509ConfigKeyUsage";

export interface certificateauthority_getAuthorityConfigX509Config {
  // Describes the X.509 name constraints extension.
  nameConstraints?: Array<certificateauthority_getAuthorityConfigX509ConfigNameConstraint>;

  // Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
  policyIds?: Array<certificateauthority_getAuthorityConfigX509ConfigPolicyId>;

  // Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
  additionalExtensions?: Array<certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension>;

  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  aiaOcspServers?: Array<string>;

  // Describes values that are relevant in a CA certificate.
  caOptions?: Array<certificateauthority_getAuthorityConfigX509ConfigCaOption>;

  // Indicates the intended use for keys that correspond to a certificate.
  keyUsages?: Array<certificateauthority_getAuthorityConfigX509ConfigKeyUsage>;
}

export function certificateauthority_getAuthorityConfigX509Config_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nameConstraints",
      "Describes the X.509 name constraints extension.",
      certificateauthority_getAuthorityConfigX509ConfigNameConstraint_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "policyIds",
      "Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.",
      certificateauthority_getAuthorityConfigX509ConfigPolicyId_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalExtensions",
      "Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.",
      certificateauthority_getAuthorityConfigX509ConfigAdditionalExtension_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aiaOcspServers",
      'Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the\n"Authority Information Access" extension in the certificate.',
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "caOptions",
      "Describes values that are relevant in a CA certificate.",
      certificateauthority_getAuthorityConfigX509ConfigCaOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "keyUsages",
      "Indicates the intended use for keys that correspond to a certificate.",
      certificateauthority_getAuthorityConfigX509ConfigKeyUsage_GetTypes(),
      true,
      false,
    ),
  ];
}
