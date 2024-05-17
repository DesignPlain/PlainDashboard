import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceGuestAccelerator {
  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  Type?: string;

  // The number of the guest accelerator cards exposed to this instance.
  Count?: number;
}

export function Compute_InstanceGuestAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "The number of the guest accelerator cards exposed to this instance.",
      [],
      true,
      true,
    ),
  ];
}
