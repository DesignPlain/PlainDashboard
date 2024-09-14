import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataloss_PreventionJobTriggerInspectJobActionPubSub {
  // Cloud Pub/Sub topic to send notifications to.
  topic?: string;
}

export function dataloss_PreventionJobTriggerInspectJobActionPubSub_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "topic",
      "Cloud Pub/Sub topic to send notifications to.",
      () => [],
      true,
      false,
    ),
  ];
}
