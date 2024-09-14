import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage,
  certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage";
import {
  certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage,
  certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage";
import {
  certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage,
  certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage_GetTypes,
} from "./certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage";

export interface certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage {
  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  baseKeyUsage?: certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  extendedKeyUsage?: certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage;

  /*
An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
Structure is documented below.
*/
  unknownExtendedKeyUsages?: Array<certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage>;
}

export function certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "extendedKeyUsage",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      () =>
        certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "unknownExtendedKeyUsages",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.\nStructure is documented below.",
      () =>
        certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "baseKeyUsage",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      () =>
        certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage_GetTypes(),
      true,
      false,
    ),
  ];
}
