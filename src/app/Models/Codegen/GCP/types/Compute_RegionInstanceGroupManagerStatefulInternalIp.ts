import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionInstanceGroupManagerStatefulInternalIp {
  // , A value that prescribes what should happen to the internal ip when the VM instance is deleted. The available options are `NEVER` and `ON_PERMANENT_INSTANCE_DELETION`. `NEVER` - detach the ip when the VM is deleted, but do not delete the ip. `ON_PERMANENT_INSTANCE_DELETION` will delete the internal ip when the VM is permanently deleted from the instance group.
  DeleteRule?: string;

  // , The network interface name of the internal Ip. Possible value: `nic0`.
  InterfaceName?: string;
}

export function Compute_RegionInstanceGroupManagerStatefulInternalIp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "InterfaceName",
      ", The network interface name of the internal Ip. Possible value: `nic0`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DeleteRule",
      ", A value that prescribes what should happen to the internal ip when the VM instance is deleted. The available options are `NEVER` and `ON_PERMANENT_INSTANCE_DELETION`. `NEVER` - detach the ip when the VM is deleted, but do not delete the ip. `ON_PERMANENT_INSTANCE_DELETION` will delete the internal ip when the VM is permanently deleted from the instance group.",
      [],
      false,
      false,
    ),
  ];
}
