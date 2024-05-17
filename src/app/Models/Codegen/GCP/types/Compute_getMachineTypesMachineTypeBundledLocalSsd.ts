import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getMachineTypesMachineTypeBundledLocalSsd {
  // The number of partitions.
  PartitionCount?: number;

  // The default disk interface if the interface is not specified.
  DefaultInterface?: string;
}

export function Compute_getMachineTypesMachineTypeBundledLocalSsd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "PartitionCount",
      "The number of partitions.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DefaultInterface",
      "The default disk interface if the interface is not specified.",
      [],
      true,
      false,
    ),
  ];
}
