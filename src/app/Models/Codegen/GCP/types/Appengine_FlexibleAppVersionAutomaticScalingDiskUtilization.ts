import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_FlexibleAppVersionAutomaticScalingDiskUtilization {
  // Target bytes read per second.
  TargetReadBytesPerSecond?: number;

  // Target ops read per seconds.
  TargetReadOpsPerSecond?: number;

  // Target bytes written per second.
  TargetWriteBytesPerSecond?: number;

  // Target ops written per second.
  TargetWriteOpsPerSecond?: number;
}

export function Appengine_FlexibleAppVersionAutomaticScalingDiskUtilization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "TargetReadBytesPerSecond",
      "Target bytes read per second.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TargetReadOpsPerSecond",
      "Target ops read per seconds.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TargetWriteBytesPerSecond",
      "Target bytes written per second.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TargetWriteOpsPerSecond",
      "Target ops written per second.",
      [],
      false,
      false,
    ),
  ];
}
