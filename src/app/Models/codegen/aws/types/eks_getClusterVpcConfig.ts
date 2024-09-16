import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface eks_getClusterVpcConfig {
  // List of CIDR blocks. Indicates which CIDR blocks can access the Amazon EKS public API server endpoint.
  publicAccessCidrs?: Array<string>;

  // List of security group IDs
  securityGroupIds?: Array<string>;

  // List of subnet IDs
  subnetIds?: Array<string>;

  // The VPC associated with your cluster.
  vpcId?: string;

  // The cluster security group that was created by Amazon EKS for the cluster.
  clusterSecurityGroupId?: string;

  // Indicates whether or not the Amazon EKS private API server endpoint is enabled.
  endpointPrivateAccess?: boolean;

  // Indicates whether or not the Amazon EKS public API server endpoint is enabled.
  endpointPublicAccess?: boolean;
}

export function eks_getClusterVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'endpointPrivateAccess',
      'Indicates whether or not the Amazon EKS private API server endpoint is enabled.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'endpointPublicAccess',
      'Indicates whether or not the Amazon EKS public API server endpoint is enabled.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'publicAccessCidrs',
      'List of CIDR blocks. Indicates which CIDR blocks can access the Amazon EKS public API server endpoint.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIds',
      'List of security group IDs',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'List of subnet IDs',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcId',
      'The VPC associated with your cluster.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clusterSecurityGroupId',
      'The cluster security group that was created by Amazon EKS for the cluster.',
      () => [],
      true,
      false,
    ),
  ];
}
