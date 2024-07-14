import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getInstanceTypeGpus {
  //
  count?: number;

  //
  manufacturer?: string;

  // Size of the instance memory, in MiB.
  memorySize?: number;

  //
  name?: string;
}

export function ec2_getInstanceTypeGpus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "count", "", [], true, false),
    new DynamicUIProps(InputType.String, "manufacturer", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "memorySize",
      "Size of the instance memory, in MiB.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "name", "", [], true, false),
  ];
}
