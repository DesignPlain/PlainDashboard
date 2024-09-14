import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface devopsguru_EventSourcesConfigEventSourceAmazonCodeGuruProfiler {
  // Status of the CodeGuru Profiler integration. Valid values are `ENABLED` and `DISABLED`.
  status?: string;
}

export function devopsguru_EventSourcesConfigEventSourceAmazonCodeGuruProfiler_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Status of the CodeGuru Profiler integration. Valid values are `ENABLED` and `DISABLED`.",
      () => [],
      true,
      false,
    ),
  ];
}
