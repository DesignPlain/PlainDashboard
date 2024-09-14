import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getInstanceTypeGpus {
  // Size of the instance memory, in MiB.
  memorySize?: number;

  //
  name?: string;

  //
  count?: number;

  //
  manufacturer?: string;
}

export function ec2_getInstanceTypeGpus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "manufacturer",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memorySize",
      "Size of the instance memory, in MiB.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "name", "", () => [], true, false),
    new DynamicUIProps(InputType.Number, "count", "", () => [], true, false),
  ];
}
