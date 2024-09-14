import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface devopsguru_getNotificationChannelFilter {
  // Events to receive notifications for.
  messageTypes?: Array<string>;

  // Severity levels to receive notifications for.
  severities?: Array<string>;
}

export function devopsguru_getNotificationChannelFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "messageTypes",
      "Events to receive notifications for.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "severities",
      "Severity levels to receive notifications for.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
