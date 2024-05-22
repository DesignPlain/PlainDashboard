import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes,
  certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes";
import {
  certificateauthority_CaPoolIssuancePolicyAllowedKeyType,
  certificateauthority_CaPoolIssuancePolicyAllowedKeyType_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyAllowedKeyType";
import {
  certificateauthority_CaPoolIssuancePolicyBaselineValues,
  certificateauthority_CaPoolIssuancePolicyBaselineValues_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyBaselineValues";
import {
  certificateauthority_CaPoolIssuancePolicyIdentityConstraints,
  certificateauthority_CaPoolIssuancePolicyIdentityConstraints_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyIdentityConstraints";

export interface certificateauthority_CaPoolIssuancePolicy {
  /*
IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool.
Structure is documented below.
*/
  allowedIssuanceModes?: certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes;

  /*
If any AllowedKeyType is specified, then the certificate request's public key must match one of the key types listed here.
Otherwise, any key may be used.
Structure is documented below.
*/
  allowedKeyTypes?: Array<certificateauthority_CaPoolIssuancePolicyAllowedKeyType>;

  /*
A set of X.509 values that will be applied to all certificates issued through this CaPool. If a certificate request
includes conflicting values for the same properties, they will be overwritten by the values defined here. If a certificate
request uses a CertificateTemplate that defines conflicting predefinedValues for the same properties, the certificate
issuance request will fail.
Structure is documented below.
*/
  baselineValues?: certificateauthority_CaPoolIssuancePolicyBaselineValues;

  /*
Describes constraints on identities that may appear in Certificates issued through this CaPool.
If this is omitted, then this CaPool will not add restrictions on a certificate's identity.
Structure is documented below.
*/
  identityConstraints?: certificateauthority_CaPoolIssuancePolicyIdentityConstraints;

  /*
The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority
expires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.
*/
  maximumLifetime?: string;
}

export function certificateauthority_CaPoolIssuancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "allowedIssuanceModes",
      "IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool.\nStructure is documented below.",
      certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedKeyTypes",
      "If any AllowedKeyType is specified, then the certificate request's public key must match one of the key types listed here.\nOtherwise, any key may be used.\nStructure is documented below.",
      certificateauthority_CaPoolIssuancePolicyAllowedKeyType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "baselineValues",
      "A set of X.509 values that will be applied to all certificates issued through this CaPool. If a certificate request\nincludes conflicting values for the same properties, they will be overwritten by the values defined here. If a certificate\nrequest uses a CertificateTemplate that defines conflicting predefinedValues for the same properties, the certificate\nissuance request will fail.\nStructure is documented below.",
      certificateauthority_CaPoolIssuancePolicyBaselineValues_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "identityConstraints",
      "Describes constraints on identities that may appear in Certificates issued through this CaPool.\nIf this is omitted, then this CaPool will not add restrictions on a certificate's identity.\nStructure is documented below.",
      certificateauthority_CaPoolIssuancePolicyIdentityConstraints_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maximumLifetime",
      "The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority\nexpires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.",
      [],
      false,
      false,
    ),
  ];
}
