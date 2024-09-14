import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface scheduler_ScheduleTargetKinesisParameters {
  // Specifies the shard to which EventBridge Scheduler sends the event. Up to 256 characters.
  partitionKey?: string;
}

export function scheduler_ScheduleTargetKinesisParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "partitionKey",
      "Specifies the shard to which EventBridge Scheduler sends the event. Up to 256 characters.",
      () => [],
      true,
      false,
    ),
  ];
}
