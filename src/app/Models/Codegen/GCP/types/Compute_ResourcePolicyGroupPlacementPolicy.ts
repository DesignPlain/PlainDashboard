import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_ResourcePolicyGroupPlacementPolicy {
  /*
Number of VMs in this placement group. Google does not recommend that you use this field
unless you use a compact policy and you want your policy to work only if it contains this
exact number of VMs.
*/
  VmCount?: number;

  /*
The number of availability domains instances will be spread across. If two instances are in different
availability domain, they will not be put in the same low latency network
*/
  AvailabilityDomainCount?: number;

  /*
Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.
Specify `COLLOCATED` to enable collocation. Can only be specified with `vm_count`. If compute instances are created
with a COLLOCATED policy, then exactly `vm_count` instances must be created at the same time with the resource policy
attached.
Possible values are: `COLLOCATED`.
*/
  Collocation?: string;

  // Specifies the number of max logical switches.
  MaxDistance?: number;
}

export function Compute_ResourcePolicyGroupPlacementPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "AvailabilityDomainCount",
      "The number of availability domains instances will be spread across. If two instances are in different\navailability domain, they will not be put in the same low latency network",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Collocation",
      "Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.\nSpecify `COLLOCATED` to enable collocation. Can only be specified with `vm_count`. If compute instances are created\nwith a COLLOCATED policy, then exactly `vm_count` instances must be created at the same time with the resource policy\nattached.\nPossible values are: `COLLOCATED`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxDistance",
      "Specifies the number of max logical switches.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "VmCount",
      "Number of VMs in this placement group. Google does not recommend that you use this field\nunless you use a compact policy and you want your policy to work only if it contains this\nexact number of VMs.",
      [],
      false,
      true,
    ),
  ];
}
