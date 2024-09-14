import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface pipes_PipeTargetParametersCloudwatchLogsParameters {
  // The name of the log stream.
  logStreamName?: string;

  // The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. This is the JSON path to the field in the event e.g. $.detail.timestamp
  timestamp?: string;
}

export function pipes_PipeTargetParametersCloudwatchLogsParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logStreamName",
      "The name of the log stream.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timestamp",
      "The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. This is the JSON path to the field in the event e.g. $.detail.timestamp",
      () => [],
      false,
      false,
    ),
  ];
}
