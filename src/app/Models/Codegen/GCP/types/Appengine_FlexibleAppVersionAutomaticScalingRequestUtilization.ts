import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_FlexibleAppVersionAutomaticScalingRequestUtilization {
  // Target number of concurrent requests.
  TargetConcurrentRequests?: number;

  // Target requests per second.
  TargetRequestCountPerSecond?: string;
}

export function Appengine_FlexibleAppVersionAutomaticScalingRequestUtilization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "TargetConcurrentRequests",
      "Target number of concurrent requests.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TargetRequestCountPerSecond",
      "Target requests per second.",
      [],
      false,
      false,
    ),
  ];
}
