import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_RegionInstanceGroupManagerStatefulExternalIp {
  // , A value that prescribes what should happen to the external ip when the VM instance is deleted. The available options are `NEVER` and `ON_PERMANENT_INSTANCE_DELETION`. `NEVER` - detach the ip when the VM is deleted, but do not delete the ip. `ON_PERMANENT_INSTANCE_DELETION` will delete the external ip when the VM is permanently deleted from the instance group.
  deleteRule?: string;

  // , The network interface name of the external Ip. Possible value: `nic0`.
  interfaceName?: string;
}

export function compute_RegionInstanceGroupManagerStatefulExternalIp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deleteRule",
      ", A value that prescribes what should happen to the external ip when the VM instance is deleted. The available options are `NEVER` and `ON_PERMANENT_INSTANCE_DELETION`. `NEVER` - detach the ip when the VM is deleted, but do not delete the ip. `ON_PERMANENT_INSTANCE_DELETION` will delete the external ip when the VM is permanently deleted from the instance group.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "interfaceName",
      ", The network interface name of the external Ip. Possible value: `nic0`.",
      () => [],
      false,
      false,
    ),
  ];
}
