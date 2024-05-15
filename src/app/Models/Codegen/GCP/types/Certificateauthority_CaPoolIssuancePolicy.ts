import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CaPoolIssuancePolicyIdentityConstraints,
  Certificateauthority_CaPoolIssuancePolicyIdentityConstraints_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyIdentityConstraints";
import {
  Certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes,
  Certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes";
import {
  Certificateauthority_CaPoolIssuancePolicyAllowedKeyType,
  Certificateauthority_CaPoolIssuancePolicyAllowedKeyType_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyAllowedKeyType";
import {
  Certificateauthority_CaPoolIssuancePolicyBaselineValues,
  Certificateauthority_CaPoolIssuancePolicyBaselineValues_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyBaselineValues";

export interface Certificateauthority_CaPoolIssuancePolicy {
  /*
Describes constraints on identities that may appear in Certificates issued through this CaPool.
If this is omitted, then this CaPool will not add restrictions on a certificate's identity.
Structure is documented below.
*/
  IdentityConstraints?: Certificateauthority_CaPoolIssuancePolicyIdentityConstraints;

  /*
The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority
expires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.
*/
  MaximumLifetime?: string;

  /*
IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool.
Structure is documented below.
*/
  AllowedIssuanceModes?: Certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes;

  /*
If any AllowedKeyType is specified, then the certificate request's public key must match one of the key types listed here.
Otherwise, any key may be used.
Structure is documented below.
*/
  AllowedKeyTypes?: Array<Certificateauthority_CaPoolIssuancePolicyAllowedKeyType>;

  /*
A set of X.509 values that will be applied to all certificates issued through this CaPool. If a certificate request
includes conflicting values for the same properties, they will be overwritten by the values defined here. If a certificate
request uses a CertificateTemplate that defines conflicting predefinedValues for the same properties, the certificate
issuance request will fail.
Structure is documented below.
*/
  BaselineValues?: Certificateauthority_CaPoolIssuancePolicyBaselineValues;
}

export function Certificateauthority_CaPoolIssuancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedKeyTypes",
      "If any AllowedKeyType is specified, then the certificate request's public key must match one of the key types listed here.\nOtherwise, any key may be used.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyAllowedKeyType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "BaselineValues",
      "A set of X.509 values that will be applied to all certificates issued through this CaPool. If a certificate request\nincludes conflicting values for the same properties, they will be overwritten by the values defined here. If a certificate\nrequest uses a CertificateTemplate that defines conflicting predefinedValues for the same properties, the certificate\nissuance request will fail.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyBaselineValues_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IdentityConstraints",
      "Describes constraints on identities that may appear in Certificates issued through this CaPool.\nIf this is omitted, then this CaPool will not add restrictions on a certificate's identity.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyIdentityConstraints_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaximumLifetime",
      "The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority\nexpires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AllowedIssuanceModes",
      "IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes_GetTypes(),
      false,
      false,
    ),
  ];
}
