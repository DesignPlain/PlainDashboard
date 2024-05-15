import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage,
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage";
import {
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesNameConstraints,
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesNameConstraints_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyBaselineValuesNameConstraints";
import {
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesPolicyId,
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesPolicyId_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyBaselineValuesPolicyId";
import {
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension,
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension";
import {
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesCaOptions,
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesCaOptions_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyBaselineValuesCaOptions";

export interface Certificateauthority_CaPoolIssuancePolicyBaselineValues {
  /*
Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
Structure is documented below.
*/
  PolicyIds?: Array<Certificateauthority_CaPoolIssuancePolicyBaselineValuesPolicyId>;

  /*
Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
Structure is documented below.
*/
  AdditionalExtensions?: Array<Certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension>;

  /*
Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
*/
  AiaOcspServers?: Array<string>;

  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  CaOptions?: Certificateauthority_CaPoolIssuancePolicyBaselineValuesCaOptions;

  /*
Indicates the intended use for keys that correspond to a certificate.
Structure is documented below.
*/
  KeyUsage?: Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage;

  /*
Describes the X.509 name constraints extension.
Structure is documented below.
*/
  NameConstraints?: Certificateauthority_CaPoolIssuancePolicyBaselineValuesNameConstraints;
}

export function Certificateauthority_CaPoolIssuancePolicyBaselineValues_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CaOptions",
      "Describes values that are relevant in a CA certificate.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyBaselineValuesCaOptions_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "KeyUsage",
      "Indicates the intended use for keys that correspond to a certificate.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NameConstraints",
      "Describes the X.509 name constraints extension.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyBaselineValuesNameConstraints_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PolicyIds",
      "Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyBaselineValuesPolicyId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalExtensions",
      "Specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AiaOcspServers",
      'Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the\n"Authority Information Access" extension in the certificate.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
