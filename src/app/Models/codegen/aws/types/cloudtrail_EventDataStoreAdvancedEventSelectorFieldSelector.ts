import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudtrail_EventDataStoreAdvancedEventSelectorFieldSelector {
  // A list of values that excludes events that match the first few characters of the event record field specified as the value of `field`.
  notStartsWiths?: Array<string>;

  // A list of values that includes events that match the first few characters of the event record field specified as the value of `field`.
  startsWiths?: Array<string>;

  // A list of values that includes events that match the last few characters of the event record field specified as the value of `field`.
  endsWiths?: Array<string>;

  // A list of values that includes events that match the exact value of the event record field specified as the value of `field`. This is the only valid operator that you can use with the `readOnly`, `eventCategory`, and `resources.type` fields.
  equals?: Array<string>;

  // Specifies a field in an event record on which to filter events to be logged. You can specify only the following values: `readOnly`, `eventSource`, `eventName`, `eventCategory`, `resources.type`, `resources.ARN`.
  field?: string;

  // A list of values that excludes events that match the last few characters of the event record field specified as the value of `field`.
  notEndsWiths?: Array<string>;

  // A list of values that excludes events that match the exact value of the event record field specified as the value of `field`.
  notEquals?: Array<string>;
}

export function cloudtrail_EventDataStoreAdvancedEventSelectorFieldSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "field",
      "Specifies a field in an event record on which to filter events to be logged. You can specify only the following values: `readOnly`, `eventSource`, `eventName`, `eventCategory`, `resources.type`, `resources.ARN`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "notEndsWiths",
      "A list of values that excludes events that match the last few characters of the event record field specified as the value of `field`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "notEquals",
      "A list of values that excludes events that match the exact value of the event record field specified as the value of `field`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "notStartsWiths",
      "A list of values that excludes events that match the first few characters of the event record field specified as the value of `field`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "startsWiths",
      "A list of values that includes events that match the first few characters of the event record field specified as the value of `field`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "endsWiths",
      "A list of values that includes events that match the last few characters of the event record field specified as the value of `field`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "equals",
      "A list of values that includes events that match the exact value of the event record field specified as the value of `field`. This is the only valid operator that you can use with the `readOnly`, `eventCategory`, and `resources.type` fields.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
