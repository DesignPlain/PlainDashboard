import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface emr_BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange {
  // The first port in the range of TCP ports.
  minRange?: number;

  // The final port in the range of TCP ports.
  maxRange?: number;
}

export function emr_BlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxRange",
      "The final port in the range of TCP ports.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minRange",
      "The first port in the range of TCP ports.",
      [],
      true,
      false,
    ),
  ];
}
