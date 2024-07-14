import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alloydb_ClusterNetworkConfig {
  /*
The name of the allocated IP range for the private IP AlloyDB cluster. For example: "google-managed-services-default".
If set, the instance IPs for this cluster will be created in the allocated range.
*/
  allocatedIpRange?: string;

  /*
The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.
It is specified in the form: "projects/{projectNumber}/global/networks/{network_id}".
*/
  network?: string;
}

export function alloydb_ClusterNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "allocatedIpRange",
      'The name of the allocated IP range for the private IP AlloyDB cluster. For example: "google-managed-services-default".\nIf set, the instance IPs for this cluster will be created in the allocated range.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      'The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.\nIt is specified in the form: "projects/{projectNumber}/global/networks/{network_id}".',
      [],
      false,
      false,
    ),
  ];
}
