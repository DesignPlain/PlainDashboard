import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface emr_BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange {
  // The final port in the range of TCP ports.
  maxRange?: number;

  // The first port in the range of TCP ports.
  minRange?: number;
}

export function emr_BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxRange",
      "The final port in the range of TCP ports.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minRange",
      "The first port in the range of TCP ports.",
      () => [],
      true,
      false,
    ),
  ];
}
