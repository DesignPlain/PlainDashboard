import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_getMachineTypesMachineTypeBundledLocalSsd {
  // The default disk interface if the interface is not specified.
  defaultInterface?: string;

  // The number of partitions.
  partitionCount?: number;
}

export function compute_getMachineTypesMachineTypeBundledLocalSsd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "defaultInterface",
      "The default disk interface if the interface is not specified.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "partitionCount",
      "The number of partitions.",
      [],
      true,
      false,
    ),
  ];
}
