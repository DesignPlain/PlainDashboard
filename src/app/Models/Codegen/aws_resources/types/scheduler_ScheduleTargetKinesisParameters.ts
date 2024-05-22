import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
