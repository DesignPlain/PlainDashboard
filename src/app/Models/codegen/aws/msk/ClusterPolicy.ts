import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ClusterPolicyArgs {
  // The Amazon Resource Name (ARN) that uniquely identifies the cluster.
  clusterArn?: string;

  // Resource policy for cluster.
  policy?: string;
}
export class ClusterPolicy extends DS_Resource {
  //
  public currentVersion?: string;

  // Resource policy for cluster.
  public policy?: string;

  // The Amazon Resource Name (ARN) that uniquely identifies the cluster.
  public clusterArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'policy',
        'Resource policy for cluster.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterArn',
        'The Amazon Resource Name (ARN) that uniquely identifies the cluster.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
