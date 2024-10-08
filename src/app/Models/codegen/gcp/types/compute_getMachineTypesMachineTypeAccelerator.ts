import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_getMachineTypesMachineTypeAccelerator {
  // Number of accelerator cards exposed to the guest.
  guestAcceleratorCount?: number;

  // The accelerator type resource name, not a full URL, e.g. `nvidia-tesla-t4`.
  guestAcceleratorType?: string;
}

export function compute_getMachineTypesMachineTypeAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'guestAcceleratorType',
      'The accelerator type resource name, not a full URL, e.g. `nvidia-tesla-t4`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'guestAcceleratorCount',
      'Number of accelerator cards exposed to the guest.',
      () => [],
      true,
      false,
    ),
  ];
}
