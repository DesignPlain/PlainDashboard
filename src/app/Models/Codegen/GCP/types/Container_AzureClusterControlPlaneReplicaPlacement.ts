import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_AzureClusterControlPlaneReplicaPlacement {
  // For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk.
  azureAvailabilityZone?: string;

  // For a given replica, the ARM ID of the subnet where the control plane VM is deployed. Make sure it's a subnet under the virtual network in the cluster configuration.
  subnetId?: string;
}

export function container_AzureClusterControlPlaneReplicaPlacement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "azureAvailabilityZone",
      "For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "For a given replica, the ARM ID of the subnet where the control plane VM is deployed. Make sure it's a subnet under the virtual network in the cluster configuration.",
      [],
      true,
      true,
    ),
  ];
}
