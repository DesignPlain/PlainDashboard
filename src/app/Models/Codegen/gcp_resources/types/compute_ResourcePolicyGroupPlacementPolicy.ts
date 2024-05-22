import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_ResourcePolicyGroupPlacementPolicy {
  /*
Number of VMs in this placement group. Google does not recommend that you use this field
unless you use a compact policy and you want your policy to work only if it contains this
exact number of VMs.
*/
  vmCount?: number;

  /*
The number of availability domains instances will be spread across. If two instances are in different
availability domain, they will not be put in the same low latency network
*/
  availabilityDomainCount?: number;

  /*
Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.
Specify `COLLOCATED` to enable collocation. Can only be specified with `vm_count`. If compute instances are created
with a COLLOCATED policy, then exactly `vm_count` instances must be created at the same time with the resource policy
attached.
Possible values are: `COLLOCATED`.
*/
  collocation?: string;

  // Specifies the number of max logical switches.
  maxDistance?: number;
}

export function compute_ResourcePolicyGroupPlacementPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "availabilityDomainCount",
      "The number of availability domains instances will be spread across. If two instances are in different\navailability domain, they will not be put in the same low latency network",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "collocation",
      "Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.\nSpecify `COLLOCATED` to enable collocation. Can only be specified with `vm_count`. If compute instances are created\nwith a COLLOCATED policy, then exactly `vm_count` instances must be created at the same time with the resource policy\nattached.\nPossible values are: `COLLOCATED`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxDistance",
      "Specifies the number of max logical switches.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "vmCount",
      "Number of VMs in this placement group. Google does not recommend that you use this field\nunless you use a compact policy and you want your policy to work only if it contains this\nexact number of VMs.",
      [],
      false,
      true,
    ),
  ];
}
