import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_RegionCommitmentResource {
  // Name of the accelerator type resource. Applicable only when the type is ACCELERATOR.
  acceleratorType?: string;

  /*
The amount of the resource purchased (in a type-dependent unit,
such as bytes). For vCPUs, this can just be an integer. For memory,
this must be provided in MB. Memory must be a multiple of 256 MB,
with up to 6.5GB of memory per every vCPU.
*/
  amount?: string;

  /*
Type of resource for which this commitment applies.
Possible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR.
*/
  type?: string;
}

export function compute_RegionCommitmentResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "acceleratorType",
      "Name of the accelerator type resource. Applicable only when the type is ACCELERATOR.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "amount",
      "The amount of the resource purchased (in a type-dependent unit,\nsuch as bytes). For vCPUs, this can just be an integer. For memory,\nthis must be provided in MB. Memory must be a multiple of 256 MB,\nwith up to 6.5GB of memory per every vCPU.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of resource for which this commitment applies.\nPossible values are VCPU, MEMORY, LOCAL_SSD, and ACCELERATOR.",
      [],
      false,
      true,
    ),
  ];
}
