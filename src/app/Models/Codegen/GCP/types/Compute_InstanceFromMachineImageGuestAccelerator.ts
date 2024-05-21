import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_InstanceFromMachineImageGuestAccelerator {
  // The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.
  type?: string;

  // The number of the guest accelerator cards exposed to this instance.
  count?: number;
}

export function compute_InstanceFromMachineImageGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The number of the guest accelerator cards exposed to this instance.",
      [],
      true,
      true,
    ),
  ];
}
