import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization {
  // Target bytes received per second.
  TargetReceivedBytesPerSecond?: number;

  // Target packets received per second.
  TargetReceivedPacketsPerSecond?: number;

  // Target bytes sent per second.
  TargetSentBytesPerSecond?: number;

  // Target packets sent per second.
  TargetSentPacketsPerSecond?: number;
}

export function Appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "TargetSentBytesPerSecond",
      "Target bytes sent per second.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TargetSentPacketsPerSecond",
      "Target packets sent per second.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TargetReceivedBytesPerSecond",
      "Target bytes received per second.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TargetReceivedPacketsPerSecond",
      "Target packets received per second.",
      [],
      false,
      false,
    ),
  ];
}
