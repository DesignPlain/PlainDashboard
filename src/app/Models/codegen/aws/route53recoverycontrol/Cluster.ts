import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  route53recoverycontrol_ClusterClusterEndpoint,
  route53recoverycontrol_ClusterClusterEndpoint_GetTypes,
} from '../types/route53recoverycontrol_ClusterClusterEndpoint';

export interface ClusterArgs {
  // Unique name describing the cluster.
  name?: string;
}
export class Cluster extends DS_Resource {
  // ARN of the cluster
  public arn?: string;

  // List of 5 endpoints in 5 regions that can be used to talk to the cluster. See below.
  public clusterEndpoints?: Array<route53recoverycontrol_ClusterClusterEndpoint>;

  // Unique name describing the cluster.
  public name?: string;

  // Status of cluster. `PENDING` when it is being created, `PENDING_DELETION` when it is being deleted and `DEPLOYED` otherwise.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Unique name describing the cluster.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
