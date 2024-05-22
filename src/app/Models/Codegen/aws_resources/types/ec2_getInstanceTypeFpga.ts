import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getInstanceTypeFpga {
  // Size of the instance memory, in MiB.
  memorySize?: number;

  //
  name?: string;

  //
  count?: number;

  //
  manufacturer?: string;
}

export function ec2_getInstanceTypeFpga_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "name", "", [], true, false),
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
  ];
}
