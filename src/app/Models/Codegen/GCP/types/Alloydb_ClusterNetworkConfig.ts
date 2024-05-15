import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_ClusterNetworkConfig {
  /*
The name of the allocated IP range for the private IP AlloyDB cluster. For example: "google-managed-services-default".
If set, the instance IPs for this cluster will be created in the allocated range.
*/
  AllocatedIpRange?: string;

  /*
The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.
It is specified in the form: "projects/{projectNumber}/global/networks/{network_id}".
*/
  Network?: string;
}

export function Alloydb_ClusterNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AllocatedIpRange",
      'The name of the allocated IP range for the private IP AlloyDB cluster. For example: "google-managed-services-default".\nIf set, the instance IPs for this cluster will be created in the allocated range.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Network",
      'The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.\nIt is specified in the form: "projects/{projectNumber}/global/networks/{network_id}".',
      [],
      false,
      false,
    ),
  ];
}
