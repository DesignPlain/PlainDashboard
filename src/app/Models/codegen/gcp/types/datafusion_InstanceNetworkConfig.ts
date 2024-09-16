import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datafusion_InstanceNetworkConfig {
  /*
The IP range in CIDR notation to use for the managed Data Fusion instance
nodes. This range must not overlap with any other ranges used in the Data Fusion instance network.
*/
  ipAllocation?: string;

  /*
Name of the network in the project with which the tenant project
will be peered for executing pipelines. In case of shared VPC where the network resides in another host
project the network should specified in the form of projects/{host-project-id}/global/networks/{network}
*/
  network?: string;
}

export function datafusion_InstanceNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'ipAllocation',
      'The IP range in CIDR notation to use for the managed Data Fusion instance\nnodes. This range must not overlap with any other ranges used in the Data Fusion instance network.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'network',
      'Name of the network in the project with which the tenant project\nwill be peered for executing pipelines. In case of shared VPC where the network resides in another host\nproject the network should specified in the form of projects/{host-project-id}/global/networks/{network}',
      () => [],
      true,
      true,
    ),
  ];
}
