import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage,
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage";
import {
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage,
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage";
import {
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage,
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage";

export interface Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage {
  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  BaseKeyUsage?: Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  ExtendedKeyUsage?: Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage;

  /*
An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
Structure is documented below.
*/
  UnknownExtendedKeyUsages?: Array<Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage>;
}

export function Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BaseKeyUsage",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ExtendedKeyUsage",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UnknownExtendedKeyUsages",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsage_GetTypes(),
      false,
      false,
    ),
  ];
}
