import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionJobTriggerInspectJobActionPubSub {
  // Cloud Pub/Sub topic to send notifications to.
  Topic?: string;
}

export function Dataloss_PreventionJobTriggerInspectJobActionPubSub_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Topic",
      "Cloud Pub/Sub topic to send notifications to.",
      [],
      true,
      false,
    ),
  ];
}
