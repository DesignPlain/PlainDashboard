import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
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
  eks_ClusterKubernetesNetworkConfig,
  eks_ClusterKubernetesNetworkConfig_GetTypes,
} from "../types/eks_ClusterKubernetesNetworkConfig";
import {
  eks_ClusterAccessConfig,
  eks_ClusterAccessConfig_GetTypes,
} from "../types/eks_ClusterAccessConfig";
import {
  eks_ClusterEncryptionConfig,
  eks_ClusterEncryptionConfig_GetTypes,
} from "../types/eks_ClusterEncryptionConfig";
import {
  eks_ClusterOutpostConfig,
  eks_ClusterOutpostConfig_GetTypes,
} from "../types/eks_ClusterOutpostConfig";

export interface ClusterArgs {
  /*
Configuration block for the VPC associated with your cluster. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see [Cluster VPC Considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and [Cluster Security Group Considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the Amazon EKS User Guide. Detailed below. Also contains attributes detailed in the Attributes section.

The following arguments are optional:
*/
  vpcConfig?: eks_ClusterVpcConfig;

  //
  defaultAddonsToRemoves?: Array<string>;

  // Configuration block with kubernetes network configuration for the cluster. Detailed below. If removed, this provider will only perform drift detection if a configuration value is provided.
  kubernetesNetworkConfig?: eks_ClusterKubernetesNetworkConfig;

  // Name of the cluster. Must be between 1-100 characters in length. Must begin with an alphanumeric character, and must only contain alphanumeric characters, dashes and underscores (`^[0-9A-Za-z][A-Za-z0-9\-_]-$`).
  name?: string;

  // ARN of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. Ensure the resource configuration includes explicit dependencies on the IAM Role permissions by adding `depends_on` if using the `aws.iam.RolePolicy` resource or `aws.iam.RolePolicyAttachment` resource, otherwise EKS cannot delete EKS managed EC2 infrastructure such as Security Groups on EKS Cluster deletion.
  roleArn?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block for the access config associated with your cluster, see [Amazon EKS Access Entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html).
  accessConfig?: eks_ClusterAccessConfig;

  // List of the desired control plane logging to enable. For more information, see [Amazon EKS Control Plane Logging](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html).
  enabledClusterLogTypes?: Array<string>;

  // Configuration block with encryption configuration for the cluster. Only available on Kubernetes 1.13 and above clusters created after March 6, 2020. Detailed below.
  encryptionConfig?: eks_ClusterEncryptionConfig;

  // Configuration block representing the configuration of your local Amazon EKS cluster on an AWS Outpost. This block isn't available for creating Amazon EKS clusters on the AWS cloud.
  outpostConfig?: eks_ClusterOutpostConfig;

  // Desired Kubernetes master version. If you do not specify a value, the latest available version at resource creation is used and no upgrades will occur except those automatically triggered by EKS. The value must be configured and increased to upgrade the version when desired. Downgrades are not supported by EKS.
  version?: string;
}
export class Cluster extends Resource {
  //
  public certificateAuthorities?: Array<eks_ClusterCertificateAuthority>;

  // The ID of your local Amazon EKS cluster on the AWS Outpost. This attribute isn't available for an AWS EKS cluster on AWS cloud.
  public clusterId?: string;

  //
  public defaultAddonsToRemoves?: Array<string>;

  /*
Attribute block containing identity provider information for your cluster. Only available on Kubernetes version 1.13 and 1.14 clusters created or upgraded on or after September 3, 2019. Detailed below.
- `kubernetes_network_config.service_ipv6_cidr` - The CIDR block that Kubernetes pod and service IP addresses are assigned from if you specified `ipv6` for ipFamily when you created the cluster. Kubernetes assigns service addresses from the unique local address range (fc00::/7) because you can't specify a custom IPv6 CIDR block when you create the cluster.
*/
  public identities?: Array<eks_ClusterIdentity>;

  // Name of the cluster. Must be between 1-100 characters in length. Must begin with an alphanumeric character, and must only contain alphanumeric characters, dashes and underscores (`^[0-9A-Za-z][A-Za-z0-9\-_]-$`).
  public name?: string;

  // ARN of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. Ensure the resource configuration includes explicit dependencies on the IAM Role permissions by adding `depends_on` if using the `aws.iam.RolePolicy` resource or `aws.iam.RolePolicyAttachment` resource, otherwise EKS cannot delete EKS managed EC2 infrastructure such as Security Groups on EKS Cluster deletion.
  public roleArn?: string;

  // Configuration block with kubernetes network configuration for the cluster. Detailed below. If removed, this provider will only perform drift detection if a configuration value is provided.
  public kubernetesNetworkConfig?: eks_ClusterKubernetesNetworkConfig;

  // Configuration block representing the configuration of your local Amazon EKS cluster on an AWS Outpost. This block isn't available for creating Amazon EKS clusters on the AWS cloud.
  public outpostConfig?: eks_ClusterOutpostConfig;

  // Platform version for the cluster.
  public platformVersion?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Configuration block for the access config associated with your cluster, see [Amazon EKS Access Entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html).
  public accessConfig?: eks_ClusterAccessConfig;

  // Attribute block containing `certificate-authority-data` for your cluster. Detailed below.
  public certificateAuthority?: eks_ClusterCertificateAuthority;

  // Configuration block with encryption configuration for the cluster. Only available on Kubernetes 1.13 and above clusters created after March 6, 2020. Detailed below.
  public encryptionConfig?: eks_ClusterEncryptionConfig;

  // Endpoint for your Kubernetes API server.
  public endpoint?: string;

  // Desired Kubernetes master version. If you do not specify a value, the latest available version at resource creation is used and no upgrades will occur except those automatically triggered by EKS. The value must be configured and increased to upgrade the version when desired. Downgrades are not supported by EKS.
  public version?: string;

  // ARN of the cluster.
  public arn?: string;

  // Unix epoch timestamp in seconds for when the cluster was created.
  public createdAt?: string;

  // List of the desired control plane logging to enable. For more information, see [Amazon EKS Control Plane Logging](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html).
  public enabledClusterLogTypes?: Array<string>;

  // Status of the EKS cluster. One of `CREATING`, `ACTIVE`, `DELETING`, `FAILED`.
  public status?: string;

  /*
Configuration block for the VPC associated with your cluster. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see [Cluster VPC Considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and [Cluster Security Group Considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the Amazon EKS User Guide. Detailed below. Also contains attributes detailed in the Attributes section.

The following arguments are optional:
*/
  public vpcConfig?: eks_ClusterVpcConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfig",
        "Configuration block with encryption configuration for the cluster. Only available on Kubernetes 1.13 and above clusters created after March 6, 2020. Detailed below.",
        eks_ClusterEncryptionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcConfig",
        "Configuration block for the VPC associated with your cluster. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see [Cluster VPC Considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and [Cluster Security Group Considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the Amazon EKS User Guide. Detailed below. Also contains attributes detailed in the Attributes section.\n\nThe following arguments are optional:",
        eks_ClusterVpcConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "kubernetesNetworkConfig",
        "Configuration block with kubernetes network configuration for the cluster. Detailed below. If removed, this provider will only perform drift detection if a configuration value is provided.",
        eks_ClusterKubernetesNetworkConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the cluster. Must be between 1-100 characters in length. Must begin with an alphanumeric character, and must only contain alphanumeric characters, dashes and underscores (`^[0-9A-Za-z][A-Za-z0-9\\-_]*$`).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "accessConfig",
        "Configuration block for the access config associated with your cluster, see [Amazon EKS Access Entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html).",
        eks_ClusterAccessConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "enabledClusterLogTypes",
        "List of the desired control plane logging to enable. For more information, see [Amazon EKS Control Plane Logging](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "outpostConfig",
        "Configuration block representing the configuration of your local Amazon EKS cluster on an AWS Outpost. This block isn't available for creating Amazon EKS clusters on the AWS cloud.",
        eks_ClusterOutpostConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "Desired Kubernetes master version. If you do not specify a value, the latest available version at resource creation is used and no upgrades will occur except those automatically triggered by EKS. The value must be configured and increased to upgrade the version when desired. Downgrades are not supported by EKS.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "defaultAddonsToRemoves",
        "",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "ARN of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. Ensure the resource configuration includes explicit dependencies on the IAM Role permissions by adding `depends_on` if using the `aws.iam.RolePolicy` resource or `aws.iam.RolePolicyAttachment` resource, otherwise EKS cannot delete EKS managed EC2 infrastructure such as Security Groups on EKS Cluster deletion.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
