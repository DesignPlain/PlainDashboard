import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securityhub_InsightFiltersNetworkSourceIpv6 {
  // A finding's CIDR value.
  cidr?: string;
}

export function securityhub_InsightFiltersNetworkSourceIpv6_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cidr",
      "A finding's CIDR value.",
      [],
      true,
      false,
    ),
  ];
}
