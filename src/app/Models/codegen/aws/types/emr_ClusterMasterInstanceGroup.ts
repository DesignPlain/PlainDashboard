import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  emr_ClusterMasterInstanceGroupEbsConfig,
  emr_ClusterMasterInstanceGroupEbsConfig_GetTypes,
} from './emr_ClusterMasterInstanceGroupEbsConfig';

export interface emr_ClusterMasterInstanceGroup {
  // Bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
  bidPrice?: string;

  // Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.
  ebsConfigs?: Array<emr_ClusterMasterInstanceGroupEbsConfig>;

  // Master node type Instance Group ID, if using Instance Group for this node type.
  id?: string;

  // Target number of instances for the instance group. Must be 1 or 3. Defaults to 1. Launching with multiple master nodes is only supported in EMR version 5.23.0+, and requires this resource's `core_instance_group` to be configured. Public (Internet accessible) instances must be created in VPC subnets that have map public IP on launch enabled. Termination protection is automatically enabled when launched with multiple master nodes and this provider must have the `termination_protection = false` configuration applied before destroying this resource.
  instanceCount?: number;

  // EC2 instance type for all instances in the instance group.
  instanceType?: string;

  // Friendly name given to the instance group.
  name?: string;
}

export function emr_ClusterMasterInstanceGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bidPrice',
      'Bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ebsConfigs',
      'Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.',
      () => emr_ClusterMasterInstanceGroupEbsConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      'Master node type Instance Group ID, if using Instance Group for this node type.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'instanceCount',
      "Target number of instances for the instance group. Must be 1 or 3. Defaults to 1. Launching with multiple master nodes is only supported in EMR version 5.23.0+, and requires this resource's `core_instance_group` to be configured. Public (Internet accessible) instances must be created in VPC subnets that have map public IP on launch enabled. Termination protection is automatically enabled when launched with multiple master nodes and this provider must have the `termination_protection = false` configuration applied before destroying this resource.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceType',
      'EC2 instance type for all instances in the instance group.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Friendly name given to the instance group.',
      () => [],
      false,
      true,
    ),
  ];
}
