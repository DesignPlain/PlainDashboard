import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterVcenter {
  /*
(Output)
The vCenter IP address.
*/
  Address?: string;

  // Contains the vCenter CA certificate public key for SSL verification.
  CaCertData?: string;

  // The name of the vCenter cluster for the user cluster.
  Cluster?: string;

  // The name of the vCenter datacenter for the user cluster.
  Datacenter?: string;

  // The name of the vCenter datastore for the user cluster.
  Datastore?: string;

  // The name of the vCenter folder for the user cluster.
  Folder?: string;

  // The name of the vCenter resource pool for the user cluster.
  ResourcePool?: string;

  // The name of the vCenter storage policy for the user cluster.
  StoragePolicyName?: string;
}

export function Gkeonprem_VMwareClusterVcenter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CaCertData",
      "Contains the vCenter CA certificate public key for SSL verification.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Cluster",
      "The name of the vCenter cluster for the user cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Datacenter",
      "The name of the vCenter datacenter for the user cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Datastore",
      "The name of the vCenter datastore for the user cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Folder",
      "The name of the vCenter folder for the user cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResourcePool",
      "The name of the vCenter resource pool for the user cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StoragePolicyName",
      "The name of the vCenter storage policy for the user cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Address",
      "(Output)\nThe vCenter IP address.",
      [],
      false,
      false,
    ),
  ];
}
