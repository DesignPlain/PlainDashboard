import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface timestreamwrite_getTableRetentionProperty {
  // Duration in days in which the data must be stored in magnetic store.
  magneticStoreRetentionPeriodInDays?: number;

  // Duration in hours in which the data must be stored in memory store.
  memoryStoreRetentionPeriodInHours?: number;
}

export function timestreamwrite_getTableRetentionProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "magneticStoreRetentionPeriodInDays",
      "Duration in days in which the data must be stored in magnetic store.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryStoreRetentionPeriodInHours",
      "Duration in hours in which the data must be stored in memory store.",
      () => [],
      true,
      false,
    ),
  ];
}
