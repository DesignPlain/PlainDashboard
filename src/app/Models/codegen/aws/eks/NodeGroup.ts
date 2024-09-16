import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  eks_NodeGroupUpdateConfig,
  eks_NodeGroupUpdateConfig_GetTypes,
} from '../types/eks_NodeGroupUpdateConfig';
import {
  eks_NodeGroupLaunchTemplate,
  eks_NodeGroupLaunchTemplate_GetTypes,
} from '../types/eks_NodeGroupLaunchTemplate';
import {
  eks_NodeGroupTaint,
  eks_NodeGroupTaint_GetTypes,
} from '../types/eks_NodeGroupTaint';
import {
  eks_NodeGroupResource,
  eks_NodeGroupResource_GetTypes,
} from '../types/eks_NodeGroupResource';
import {
  eks_NodeGroupRemoteAccess,
  eks_NodeGroupRemoteAccess_GetTypes,
} from '../types/eks_NodeGroupRemoteAccess';
import {
  eks_NodeGroupScalingConfig,
  eks_NodeGroupScalingConfig_GetTypes,
} from '../types/eks_NodeGroupScalingConfig';

export interface NodeGroupArgs {
  // Disk size in GiB for worker nodes. Defaults to `50` for Windows, `20` all other node groups. The provider will only perform drift detection if a configuration value is provided.
  diskSize?: number;

  // Force version update if existing pods are unable to be drained due to a pod disruption budget issue.
  forceUpdateVersion?: boolean;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Kubernetes version. Defaults to EKS Cluster Kubernetes version. The provider will only perform drift detection if a configuration value is provided.
  version?: string;

  // Type of Amazon Machine Image (AMI) associated with the EKS Node Group. See the [AWS documentation](https://docs.aws.amazon.com/eks/latest/APIReference/API_Nodegroup.html#AmazonEKS-Type-Nodegroup-amiType) for valid values. This provider will only perform drift detection if a configuration value is provided.
  amiType?: string;

  // AMI version of the EKS Node Group. Defaults to latest version for Kubernetes version.
  releaseVersion?: string;

  // Key-value map of Kubernetes labels. Only labels that are applied with the EKS API are managed by this argument. Other Kubernetes labels applied to the EKS Node Group will not be managed.
  labels?: Map<string, string>;

  // Name of the EKS Node Group. If omitted, the provider will assign a random, unique name. Conflicts with `node_group_name_prefix`. The node group name can't be longer than 63 characters. It must start with a letter or digit, but can also include hyphens and underscores for the remaining characters.
  nodeGroupName?: string;

  // Amazon Resource Name (ARN) of the IAM Role that provides permissions for the EKS Node Group.
  nodeRoleArn?: string;

  // Configuration block with remote access settings. See `remote_access` below for details. Conflicts with `launch_template`.
  remoteAccess?: eks_NodeGroupRemoteAccess;

  // Configuration block with scaling settings. See `scaling_config` below for details.
  scalingConfig?: eks_NodeGroupScalingConfig;

  /*
Identifiers of EC2 Subnets to associate with the EKS Node Group.

The following arguments are optional:
*/
  subnetIds?: Array<string>;

  // Configuration block with update settings. See `update_config` below for details.
  updateConfig?: eks_NodeGroupUpdateConfig;

  // Name of the EKS Cluster.
  clusterName?: string;

  // List of instance types associated with the EKS Node Group. Defaults to `["t3.medium"]`. The provider will only perform drift detection if a configuration value is provided.
  instanceTypes?: Array<string>;

  // Configuration block with Launch Template settings. See `launch_template` below for details. Conflicts with `remote_access`.
  launchTemplate?: eks_NodeGroupLaunchTemplate;

  // Creates a unique name beginning with the specified prefix. Conflicts with `node_group_name`.
  nodeGroupNamePrefix?: string;

  // The Kubernetes taints to be applied to the nodes in the node group. Maximum of 50 taints per node group. See taint below for details.
  taints?: Array<eks_NodeGroupTaint>;

  // Type of capacity associated with the EKS Node Group. Valid values: `ON_DEMAND`, `SPOT`. This provider will only perform drift detection if a configuration value is provided.
  capacityType?: string;
}
export class NodeGroup extends DS_Resource {
  // Name of the EKS Cluster.
  public clusterName?: string;

  // Disk size in GiB for worker nodes. Defaults to `50` for Windows, `20` all other node groups. The provider will only perform drift detection if a configuration value is provided.
  public diskSize?: number;

  // Force version update if existing pods are unable to be drained due to a pod disruption budget issue.
  public forceUpdateVersion?: boolean;

  // Status of the EKS Node Group.
  public status?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Kubernetes taints to be applied to the nodes in the node group. Maximum of 50 taints per node group. See taint below for details.
  public taints?: Array<eks_NodeGroupTaint>;

  // Configuration block with update settings. See `update_config` below for details.
  public updateConfig?: eks_NodeGroupUpdateConfig;

  // List of instance types associated with the EKS Node Group. Defaults to `["t3.medium"]`. The provider will only perform drift detection if a configuration value is provided.
  public instanceTypes?: Array<string>;

  // AMI version of the EKS Node Group. Defaults to latest version for Kubernetes version.
  public releaseVersion?: string;

  // Configuration block with remote access settings. See `remote_access` below for details. Conflicts with `launch_template`.
  public remoteAccess?: eks_NodeGroupRemoteAccess;

  // List of objects containing information about underlying resources.
  public resources?: Array<eks_NodeGroupResource>;

  /*
Identifiers of EC2 Subnets to associate with the EKS Node Group.

The following arguments are optional:
*/
  public subnetIds?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Kubernetes version. Defaults to EKS Cluster Kubernetes version. The provider will only perform drift detection if a configuration value is provided.
  public version?: string;

  // Type of Amazon Machine Image (AMI) associated with the EKS Node Group. See the [AWS documentation](https://docs.aws.amazon.com/eks/latest/APIReference/API_Nodegroup.html#AmazonEKS-Type-Nodegroup-amiType) for valid values. This provider will only perform drift detection if a configuration value is provided.
  public amiType?: string;

  // Amazon Resource Name (ARN) of the EKS Node Group.
  public arn?: string;

  // Type of capacity associated with the EKS Node Group. Valid values: `ON_DEMAND`, `SPOT`. This provider will only perform drift detection if a configuration value is provided.
  public capacityType?: string;

  // Key-value map of Kubernetes labels. Only labels that are applied with the EKS API are managed by this argument. Other Kubernetes labels applied to the EKS Node Group will not be managed.
  public labels?: Map<string, string>;

  // Creates a unique name beginning with the specified prefix. Conflicts with `node_group_name`.
  public nodeGroupNamePrefix?: string;

  // Amazon Resource Name (ARN) of the IAM Role that provides permissions for the EKS Node Group.
  public nodeRoleArn?: string;

  // Configuration block with Launch Template settings. See `launch_template` below for details. Conflicts with `remote_access`.
  public launchTemplate?: eks_NodeGroupLaunchTemplate;

  // Name of the EKS Node Group. If omitted, the provider will assign a random, unique name. Conflicts with `node_group_name_prefix`. The node group name can't be longer than 63 characters. It must start with a letter or digit, but can also include hyphens and underscores for the remaining characters.
  public nodeGroupName?: string;

  // Configuration block with scaling settings. See `scaling_config` below for details.
  public scalingConfig?: eks_NodeGroupScalingConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'diskSize',
        'Disk size in GiB for worker nodes. Defaults to `50` for Windows, `20` all other node groups. The provider will only perform drift detection if a configuration value is provided.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'version',
        'Kubernetes version. Defaults to EKS Cluster Kubernetes version. The provider will only perform drift detection if a configuration value is provided.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'nodeRoleArn',
        'Amazon Resource Name (ARN) of the IAM Role that provides permissions for the EKS Node Group.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'scalingConfig',
        'Configuration block with scaling settings. See `scaling_config` below for details.',
        () => eks_NodeGroupScalingConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'subnetIds',
        'Identifiers of EC2 Subnets to associate with the EKS Node Group.\n\nThe following arguments are optional:',
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'capacityType',
        'Type of capacity associated with the EKS Node Group. Valid values: `ON_DEMAND`, `SPOT`. This provider will only perform drift detection if a configuration value is provided.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceUpdateVersion',
        'Force version update if existing pods are unable to be drained due to a pod disruption budget issue.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Key-value map of Kubernetes labels. Only labels that are applied with the EKS API are managed by this argument. Other Kubernetes labels applied to the EKS Node Group will not be managed.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'nodeGroupName',
        "Name of the EKS Node Group. If omitted, the provider will assign a random, unique name. Conflicts with `node_group_name_prefix`. The node group name can't be longer than 63 characters. It must start with a letter or digit, but can also include hyphens and underscores for the remaining characters.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'instanceTypes',
        'List of instance types associated with the EKS Node Group. Defaults to `["t3.medium"]`. The provider will only perform drift detection if a configuration value is provided.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'launchTemplate',
        'Configuration block with Launch Template settings. See `launch_template` below for details. Conflicts with `remote_access`.',
        () => eks_NodeGroupLaunchTemplate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterName',
        'Name of the EKS Cluster.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'amiType',
        'Type of Amazon Machine Image (AMI) associated with the EKS Node Group. See the [AWS documentation](https://docs.aws.amazon.com/eks/latest/APIReference/API_Nodegroup.html#AmazonEKS-Type-Nodegroup-amiType) for valid values. This provider will only perform drift detection if a configuration value is provided.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'releaseVersion',
        'AMI version of the EKS Node Group. Defaults to latest version for Kubernetes version.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'remoteAccess',
        'Configuration block with remote access settings. See `remote_access` below for details. Conflicts with `launch_template`.',
        () => eks_NodeGroupRemoteAccess_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'updateConfig',
        'Configuration block with update settings. See `update_config` below for details.',
        () => eks_NodeGroupUpdateConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'nodeGroupNamePrefix',
        'Creates a unique name beginning with the specified prefix. Conflicts with `node_group_name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'taints',
        'The Kubernetes taints to be applied to the nodes in the node group. Maximum of 50 taints per node group. See taint below for details.',
        () => eks_NodeGroupTaint_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
