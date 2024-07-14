import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opsworks_JavaAppLayerLoadBasedAutoScalingUpscaling {
  //
  ignoreMetricsTime?: number;

  //
  instanceCount?: number;

  //
  loadThreshold?: number;

  //
  memoryThreshold?: number;

  //
  thresholdsWaitTime?: number;

  //
  alarms?: Array<string>;

  //
  cpuThreshold?: number;
}

export function opsworks_JavaAppLayerLoadBasedAutoScalingUpscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "cpuThreshold", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "ignoreMetricsTime",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "instanceCount", "", [], false, false),
    new DynamicUIProps(InputType.Number, "loadThreshold", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "memoryThreshold",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "thresholdsWaitTime",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "alarms",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
