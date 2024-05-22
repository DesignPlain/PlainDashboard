import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appengine_FlexibleAppVersionAutomaticScalingDiskUtilization {
  // Target bytes read per second.
  targetReadBytesPerSecond?: number;

  // Target ops read per seconds.
  targetReadOpsPerSecond?: number;

  // Target bytes written per second.
  targetWriteBytesPerSecond?: number;

  // Target ops written per second.
  targetWriteOpsPerSecond?: number;
}

export function appengine_FlexibleAppVersionAutomaticScalingDiskUtilization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "targetReadBytesPerSecond",
      "Target bytes read per second.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetReadOpsPerSecond",
      "Target ops read per seconds.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetWriteBytesPerSecond",
      "Target bytes written per second.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "targetWriteOpsPerSecond",
      "Target ops written per second.",
      [],
      false,
      false,
    ),
  ];
}
