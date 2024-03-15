import { AwsClusterControlPlaneDatabaseEncryption } from "./AwsClusterControlPlaneDatabaseEncryption";
import { AwsClusterControlPlaneMainVolume } from "./AwsClusterControlPlaneMainVolume";
import { AwsClusterControlPlaneConfigEncryption } from "./AwsClusterControlPlaneConfigEncryption";
import { AwsClusterControlPlaneInstancePlacement } from "./AwsClusterControlPlaneInstancePlacement";
import { AwsClusterControlPlaneAwsServicesAuthentication } from "./AwsClusterControlPlaneAwsServicesAuthentication";
import { AwsClusterControlPlaneProxyConfig } from "./AwsClusterControlPlaneProxyConfig";
import { AwsClusterControlPlaneRootVolume } from "./AwsClusterControlPlaneRootVolume";
import { AwsClusterControlPlaneSshConfig } from "./AwsClusterControlPlaneSshConfig";

export interface AwsClusterControlPlane {
  // The ARN of the AWS KMS key used to encrypt cluster secrets.
  DatabaseEncryption?: AwsClusterControlPlaneDatabaseEncryption;

  // The name of the AWS IAM instance pofile to assign to each control plane replica.
  IamInstanceProfile?: string;

  // Optional. Configuration related to the main volume provisioned for each control plane replica. The main volume is in charge of storing all of the cluster's etcd state. Volumes will be provisioned in the availability zone associated with the corresponding subnet. When unspecified, it defaults to 8 GiB with the GP2 volume type.
  MainVolume?: AwsClusterControlPlaneMainVolume;

  // The list of subnets where control plane replicas will run. A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).
  SubnetIds?: Array<string>;

  // Optional. A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
  Tags?: Map<string, string>;

  // The ARN of the AWS KMS key used to encrypt cluster configuration.
  ConfigEncryption?: AwsClusterControlPlaneConfigEncryption;

  // Details of placement information for an instance.
  InstancePlacement?: AwsClusterControlPlaneInstancePlacement;

  // Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.
  InstanceType?: string;

  // Optional. The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.
  SecurityGroupIds?: Array<string>;

  // Authentication configuration for management of AWS resources.
  AwsServicesAuthentication?: AwsClusterControlPlaneAwsServicesAuthentication;

  // Proxy configuration for outbound HTTP(S) traffic.
  ProxyConfig?: AwsClusterControlPlaneProxyConfig;

  // Optional. Configuration related to the root volume provisioned for each control plane replica. Volumes will be provisioned in the availability zone associated with the corresponding subnet. When unspecified, it defaults to 32 GiB with the GP2 volume type.
  RootVolume?: AwsClusterControlPlaneRootVolume;

  // Optional. SSH configuration for how to access the underlying control plane machines.
  SshConfig?: AwsClusterControlPlaneSshConfig;

  // The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .
  Version?: string;
}
