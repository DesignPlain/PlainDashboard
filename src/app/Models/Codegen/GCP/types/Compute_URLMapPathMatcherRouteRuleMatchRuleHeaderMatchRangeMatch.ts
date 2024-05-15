import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatchRangeMatch {
  // The end of the range (exclusive).
  RangeEnd?: number;

  // The start of the range (inclusive).
  RangeStart?: number;
}

export function Compute_URLMapPathMatcherRouteRuleMatchRuleHeaderMatchRangeMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "RangeEnd",
      "The end of the range (exclusive).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "RangeStart",
      "The start of the range (inclusive).",
      [],
      true,
      false,
    ),
  ];
}
