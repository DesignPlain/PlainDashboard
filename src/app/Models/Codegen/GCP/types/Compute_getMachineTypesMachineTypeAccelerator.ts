import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getMachineTypesMachineTypeAccelerator {
  // The accelerator type resource name, not a full URL, e.g. `nvidia-tesla-t4`.
  GuestAcceleratorType?: string;

  // Number of accelerator cards exposed to the guest.
  GuestAcceleratorCount?: number;
}

export function Compute_getMachineTypesMachineTypeAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GuestAcceleratorType",
      "The accelerator type resource name, not a full URL, e.g. `nvidia-tesla-t4`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "GuestAcceleratorCount",
      "Number of accelerator cards exposed to the guest.",
      [],
      true,
      false,
    ),
  ];
}
