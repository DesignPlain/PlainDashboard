import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization {
  // Target bytes received per second.
  targetReceivedBytesPerSecond?: number;

  // Target packets received per second.
  targetReceivedPacketsPerSecond?: number;

  // Target bytes sent per second.
  targetSentBytesPerSecond?: number;

  // Target packets sent per second.
  targetSentPacketsPerSecond?: number;
}

export function appengine_FlexibleAppVersionAutomaticScalingNetworkUtilization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "targetReceivedBytesPerSecond",
      "Target bytes received per second.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetReceivedPacketsPerSecond",
      "Target packets received per second.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetSentBytesPerSecond",
      "Target bytes sent per second.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetSentPacketsPerSecond",
      "Target packets sent per second.",
      () => [],
      false,
      false,
    ),
  ];
}
