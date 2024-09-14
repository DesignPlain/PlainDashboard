import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  eks_ClusterEncryptionConfig,
  eks_ClusterEncryptionConfig_GetTypes,
} from "../types/eks_ClusterEncryptionConfig";
import {
  eks_ClusterKubernetesNetworkConfig,
  eks_ClusterKubernetesNetworkConfig_GetTypes,
} from "../types/eks_ClusterKubernetesNetworkConfig";
import {
  eks_ClusterCertificateAuthority,
  eks_ClusterCertificateAuthority_GetTypes,
} from "../types/eks_ClusterCertificateAuthority";
import {
  eks_ClusterIdentity,
  eks_ClusterIdentity_GetTypes,
} from "../types/eks_ClusterIdentity";
import {
  eks_ClusterVpcConfig,
  eks_ClusterVpcConfig_GetTypes,
} from "../types/eks_ClusterVpcConfig";
import {
  eks_ClusterOutpostConfig,
  eks_ClusterOutpostConfig_GetTypes,
} from "../types/eks_ClusterOutpostConfig";
import {
  eks_ClusterUpgradePolicy,
  eks_ClusterUpgradePolicy_GetTypes,
} from "../types/eks_ClusterUpgradePolicy";
import {
  eks_ClusterAccessConfig,
  eks_ClusterAccessConfig_GetTypes,
} from "../types/eks_ClusterAccessConfig";

export interface ClusterArgs {
  /*
Configuration block for the VPC associated with your cluster. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see [Cluster VPC Considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and [Cluster Security Group Considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the Amazon EKS User Guide. Detailed below. Also contains attributes detailed in the Attributes section.

The following arguments are optional:
*/
  vpcConfig?: eks_ClusterVpcConfig;

  //
  defaultAddonsToRemoves?: Array<string>;

  // Configuration block representing the configuration of your local Amazon EKS cluster on an AWS Outpost. This block isn't available for creating Amazon EKS clusters on the AWS cloud.
  outpostConfig?: eks_ClusterOutpostConfig;

  // ARN of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. Ensure the resource configuration includes explicit dependencies on the IAM Role permissions by adding `depends_on` if using the `aws.iam.RolePolicy` resource or `aws.iam.RolePolicyAttachment` resource, otherwise EKS cannot delete EKS managed EC2 infrastructure such as Security Groups on EKS Cluster deletion.
  roleArn?: string;

  // Configuration block for the support policy to use for the cluster.  See upgrade_policy for details.
  upgradePolicy?: eks_ClusterUpgradePolicy;

  // Desired Kubernetes master version. If you do not specify a value, the latest available version at resource creation is used and no upgrades will occur except those automatically triggered by EKS. The value must be configured and increased to upgrade the version when desired. Downgrades are not supported by EKS.
  version?: string;

  // Name of the cluster. Must be between 1-100 characters in length. Must begin with an alphanumeric character, and must only contain alphanumeric characters, dashes and underscores (`^[0-9A-Za-z][A-Za-z0-9\-_]-$`).
  name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block for the access config associated with your cluster, see [Amazon EKS Access Entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html).
  accessConfig?: eks_ClusterAccessConfig;

  // Install default unmanaged add-ons, such as `aws-cni`, `kube-proxy`, and CoreDNS during cluster creation. If `false`, you must manually install desired add-ons. Changing this value will force a new cluster to be created. Defaults to `true`.
  bootstrapSelfManagedAddons?: boolean;

  // List of the desired control plane logging to enable. For more information, see [Amazon EKS Control Plane Logging](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html).
  enabledClusterLogTypes?: Array<string>;

  // Configuration block with encryption configuration for the cluster. Only available on Kubernetes 1.13 and above clusters created after March 6, 2020. Detailed below.
  encryptionConfig?: eks_ClusterEncryptionConfig;

  // Configuration block with kubernetes network configuration for the cluster. Detailed below. If removed, this provider will only perform drift detection if a configuration value is provided.
  kubernetesNetworkConfig?: eks_ClusterKubernetesNetworkConfig;
}
export class Cluster extends DS_Resource {
  // Desired Kubernetes master version. If you do not specify a value, the latest available version at resource creation is used and no upgrades will occur except those automatically triggered by EKS. The value must be configured and increased to upgrade the version when desired. Downgrades are not supported by EKS.
  public version?: string;

  /*
Configuration block for the VPC associated with your cluster. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see [Cluster VPC Considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and [Cluster Security Group Considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the Amazon EKS User Guide. Detailed below. Also contains attributes detailed in the Attributes section.

The following arguments are optional:
*/
  public vpcConfig?: eks_ClusterVpcConfig;

  //
  public defaultAddonsToRemoves?: Array<string>;

  // List of the desired control plane logging to enable. For more information, see [Amazon EKS Control Plane Logging](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html).
  public enabledClusterLogTypes?: Array<string>;

  // Configuration block with kubernetes network configuration for the cluster. Detailed below. If removed, this provider will only perform drift detection if a configuration value is provided.
  public kubernetesNetworkConfig?: eks_ClusterKubernetesNetworkConfig;

  // Configuration block representing the configuration of your local Amazon EKS cluster on an AWS Outpost. This block isn't available for creating Amazon EKS clusters on the AWS cloud.
  public outpostConfig?: eks_ClusterOutpostConfig;

  // Status of the EKS cluster. One of `CREATING`, `ACTIVE`, `DELETING`, `FAILED`.
  public status?: string;

  // The ID of your local Amazon EKS cluster on the AWS Outpost. This attribute isn't available for an AWS EKS cluster on AWS cloud.
  public clusterId?: string;

  // Configuration block with encryption configuration for the cluster. Only available on Kubernetes 1.13 and above clusters created after March 6, 2020. Detailed below.
  public encryptionConfig?: eks_ClusterEncryptionConfig;

  // ARN of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. Ensure the resource configuration includes explicit dependencies on the IAM Role permissions by adding `depends_on` if using the `aws.iam.RolePolicy` resource or `aws.iam.RolePolicyAttachment` resource, otherwise EKS cannot delete EKS managed EC2 infrastructure such as Security Groups on EKS Cluster deletion.
  public roleArn?: string;

  // Platform version for the cluster.
  public platformVersion?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Configuration block for the support policy to use for the cluster.  See upgrade_policy for details.
  public upgradePolicy?: eks_ClusterUpgradePolicy;

  // Configuration block for the access config associated with your cluster, see [Amazon EKS Access Entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html).
  public accessConfig?: eks_ClusterAccessConfig;

  // ARN of the cluster.
  public arn?: string;

  // Install default unmanaged add-ons, such as `aws-cni`, `kube-proxy`, and CoreDNS during cluster creation. If `false`, you must manually install desired add-ons. Changing this value will force a new cluster to be created. Defaults to `true`.
  public bootstrapSelfManagedAddons?: boolean;

  //
  public certificateAuthorities?: Array<eks_ClusterCertificateAuthority>;

  // Attribute block containing identity provider information for your cluster. Only available on Kubernetes version 1.13 and 1.14 clusters created or upgraded on or after September 3, 2019. Detailed below.
  public identities?: Array<eks_ClusterIdentity>;

  // Attribute block containing `certificate-authority-data` for your cluster. Detailed below.
  public certificateAuthority?: eks_ClusterCertificateAuthority;

  // Unix epoch timestamp in seconds for when the cluster was created.
  public createdAt?: string;

  // Endpoint for your Kubernetes API server.
  public endpoint?: string;

  // Name of the cluster. Must be between 1-100 characters in length. Must begin with an alphanumeric character, and must only contain alphanumeric characters, dashes and underscores (`^[0-9A-Za-z][A-Za-z0-9\-_]-$`).
  public name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the cluster. Must be between 1-100 characters in length. Must begin with an alphanumeric character, and must only contain alphanumeric characters, dashes and underscores (`^[0-9A-Za-z][A-Za-z0-9\\-_]*$`).",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "enabledClusterLogTypes",
        "List of the desired control plane logging to enable. For more information, see [Amazon EKS Control Plane Logging](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html).",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "outpostConfig",
        "Configuration block representing the configuration of your local Amazon EKS cluster on an AWS Outpost. This block isn't available for creating Amazon EKS clusters on the AWS cloud.",
        () => eks_ClusterOutpostConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "defaultAddonsToRemoves",
        "",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "ARN of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. Ensure the resource configuration includes explicit dependencies on the IAM Role permissions by adding `depends_on` if using the `aws.iam.RolePolicy` resource or `aws.iam.RolePolicyAttachment` resource, otherwise EKS cannot delete EKS managed EC2 infrastructure such as Security Groups on EKS Cluster deletion.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "upgradePolicy",
        "Configuration block for the support policy to use for the cluster.  See upgrade_policy for details.",
        () => eks_ClusterUpgradePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "Desired Kubernetes master version. If you do not specify a value, the latest available version at resource creation is used and no upgrades will occur except those automatically triggered by EKS. The value must be configured and increased to upgrade the version when desired. Downgrades are not supported by EKS.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "accessConfig",
        "Configuration block for the access config associated with your cluster, see [Amazon EKS Access Entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html).",
        () => eks_ClusterAccessConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "bootstrapSelfManagedAddons",
        "Install default unmanaged add-ons, such as `aws-cni`, `kube-proxy`, and CoreDNS during cluster creation. If `false`, you must manually install desired add-ons. Changing this value will force a new cluster to be created. Defaults to `true`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfig",
        "Configuration block with encryption configuration for the cluster. Only available on Kubernetes 1.13 and above clusters created after March 6, 2020. Detailed below.",
        () => eks_ClusterEncryptionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcConfig",
        "Configuration block for the VPC associated with your cluster. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see [Cluster VPC Considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and [Cluster Security Group Considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the Amazon EKS User Guide. Detailed below. Also contains attributes detailed in the Attributes section.\n\nThe following arguments are optional:",
        () => eks_ClusterVpcConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "kubernetesNetworkConfig",
        "Configuration block with kubernetes network configuration for the cluster. Detailed below. If removed, this provider will only perform drift detection if a configuration value is provided.",
        () => eks_ClusterKubernetesNetworkConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
