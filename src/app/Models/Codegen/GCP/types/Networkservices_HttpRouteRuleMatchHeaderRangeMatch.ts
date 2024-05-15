import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_HttpRouteRuleMatchHeaderRangeMatch {
  // End of the range (exclusive).
  End?: number;

  // Start of the range (inclusive).
  Start?: number;
}

export function Networkservices_HttpRouteRuleMatchHeaderRangeMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Start",
      "Start of the range (inclusive).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "End",
      "End of the range (exclusive).",
      [],
      true,
      false,
    ),
  ];
}
