import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  emr_ManagedScalingPolicyComputeLimit,
  emr_ManagedScalingPolicyComputeLimit_GetTypes,
} from '../types/emr_ManagedScalingPolicyComputeLimit';

export interface ManagedScalingPolicyArgs {
  // Configuration block with compute limit settings. Described below.
  computeLimits?: Array<emr_ManagedScalingPolicyComputeLimit>;

  // ID of the EMR cluster
  clusterId?: string;
}
export class ManagedScalingPolicy extends DS_Resource {
  // ID of the EMR cluster
  public clusterId?: string;

  // Configuration block with compute limit settings. Described below.
  public computeLimits?: Array<emr_ManagedScalingPolicyComputeLimit>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'computeLimits',
        'Configuration block with compute limit settings. Described below.',
        () => emr_ManagedScalingPolicyComputeLimit_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterId',
        'ID of the EMR cluster',
        () => [],
        true,
        true,
      ),
    ];
  }
}
