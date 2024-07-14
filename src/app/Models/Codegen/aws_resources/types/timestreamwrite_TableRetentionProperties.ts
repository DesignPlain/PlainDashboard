import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface timestreamwrite_TableRetentionProperties {
  // The duration for which data must be stored in the magnetic store. Minimum value of 1. Maximum value of 73000.
  magneticStoreRetentionPeriodInDays?: number;

  // The duration for which data must be stored in the memory store. Minimum value of 1. Maximum value of 8766.
  memoryStoreRetentionPeriodInHours?: number;
}

export function timestreamwrite_TableRetentionProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "magneticStoreRetentionPeriodInDays",
      "The duration for which data must be stored in the magnetic store. Minimum value of 1. Maximum value of 73000.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryStoreRetentionPeriodInHours",
      "The duration for which data must be stored in the memory store. Minimum value of 1. Maximum value of 8766.",
      [],
      true,
      false,
    ),
  ];
}
