import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_InstanceFromMachineImageGuestAccelerator {
  // The number of the guest accelerator cards exposed to this instance.
  count?: number;

  // The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.
  type?: string;
}

export function compute_InstanceFromMachineImageGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The number of the guest accelerator cards exposed to this instance.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.",
      [],
      true,
      true,
    ),
  ];
}
