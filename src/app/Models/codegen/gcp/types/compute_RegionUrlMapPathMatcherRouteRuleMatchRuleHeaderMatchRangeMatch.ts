import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_RegionUrlMapPathMatcherRouteRuleMatchRuleHeaderMatchRangeMatch {
  // The start of the range (inclusive).
  rangeStart?: number;

  // The end of the range (exclusive).
  rangeEnd?: number;
}

export function compute_RegionUrlMapPathMatcherRouteRuleMatchRuleHeaderMatchRangeMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "rangeStart",
      "The start of the range (inclusive).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "rangeEnd",
      "The end of the range (exclusive).",
      () => [],
      true,
      false,
    ),
  ];
}
