import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_CaPoolIssuancePolicyBaselineValuesCaOptions,
  certificateauthority_CaPoolIssuancePolicyBaselineValuesCaOptions_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyBaselineValuesCaOptions";
import {
  certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage,
  certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage";
import {
  certificateauthority_CaPoolIssuancePolicyBaselineValuesNameConstraints,
  certificateauthority_CaPoolIssuancePolicyBaselineValuesNameConstraints_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyBaselineValuesNameConstraints";
import {
  certificateauthority_CaPoolIssuancePolicyBaselineValuesPolicyId,
  certificateauthority_CaPoolIssuancePolicyBaselineValuesPolicyId_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyBaselineValuesPolicyId";
import {
  certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension,
  certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension";

export interface certificateauthority_CaPoolIssuancePolicyBaselineValues {
  /*
Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
Structure is documented below.
*/
  additionalExtensions?: Array<certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension>;

  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  aiaOcspServers?: Array<string>;

  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  caOptions?: certificateauthority_CaPoolIssuancePolicyBaselineValuesCaOptions;

  /*
Indicates the intended use for keys that correspond to a certificate.
Structure is documented below.
*/
  keyUsage?: certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage;

  /*
Describes the X.509 name constraints extension.
Structure is documented below.
*/
  nameConstraints?: certificateauthority_CaPoolIssuancePolicyBaselineValuesNameConstraints;

  /*
Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
Structure is documented below.
*/
  policyIds?: Array<certificateauthority_CaPoolIssuancePolicyBaselineValuesPolicyId>;
}

export function certificateauthority_CaPoolIssuancePolicyBaselineValues_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "nameConstraints",
      "Describes the X.509 name constraints extension.\nStructure is documented below.",
      certificateauthority_CaPoolIssuancePolicyBaselineValuesNameConstraints_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "policyIds",
      "Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.\nStructure is documented below.",
      certificateauthority_CaPoolIssuancePolicyBaselineValuesPolicyId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalExtensions",
      "Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.\nStructure is documented below.",
      certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aiaOcspServers",
      'Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the\n"Authority Information Access" extension in the certificate.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "caOptions",
      "Describes values that are relevant in a CA certificate.\nStructure is documented below.",
      certificateauthority_CaPoolIssuancePolicyBaselineValuesCaOptions_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "keyUsage",
      "Indicates the intended use for keys that correspond to a certificate.\nStructure is documented below.",
      certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage_GetTypes(),
      true,
      false,
    ),
  ];
}
