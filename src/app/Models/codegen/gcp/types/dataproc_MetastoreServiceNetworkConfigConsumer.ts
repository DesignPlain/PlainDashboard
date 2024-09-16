import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_MetastoreServiceNetworkConfigConsumer {
  /*
(Output)
The URI of the endpoint used to access the metastore service.
*/
  endpointUri?: string;

  /*
The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint.
It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network.
There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:
`projects/{projectNumber}/regions/{region_id}/subnetworks/{subnetwork_id}
*/
  subnetwork?: string;
}

export function dataproc_MetastoreServiceNetworkConfigConsumer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'endpointUri',
      '(Output)\nThe URI of the endpoint used to access the metastore service.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'subnetwork',
      "The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint.\nIt is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network.\nThere must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:\n`projects/{projectNumber}/regions/{region_id}/subnetworks/{subnetwork_id}",
      () => [],
      true,
      false,
    ),
  ];
}
