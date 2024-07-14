import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_AwsClusterControlPlaneInstancePlacement,
  container_AwsClusterControlPlaneInstancePlacement_GetTypes,
} from "./container_AwsClusterControlPlaneInstancePlacement";
import {
  container_AwsClusterControlPlaneProxyConfig,
  container_AwsClusterControlPlaneProxyConfig_GetTypes,
} from "./container_AwsClusterControlPlaneProxyConfig";
import {
  container_AwsClusterControlPlaneRootVolume,
  container_AwsClusterControlPlaneRootVolume_GetTypes,
} from "./container_AwsClusterControlPlaneRootVolume";
import {
  container_AwsClusterControlPlaneSshConfig,
  container_AwsClusterControlPlaneSshConfig_GetTypes,
} from "./container_AwsClusterControlPlaneSshConfig";
import {
  container_AwsClusterControlPlaneAwsServicesAuthentication,
  container_AwsClusterControlPlaneAwsServicesAuthentication_GetTypes,
} from "./container_AwsClusterControlPlaneAwsServicesAuthentication";
import {
  container_AwsClusterControlPlaneConfigEncryption,
  container_AwsClusterControlPlaneConfigEncryption_GetTypes,
} from "./container_AwsClusterControlPlaneConfigEncryption";
import {
  container_AwsClusterControlPlaneMainVolume,
  container_AwsClusterControlPlaneMainVolume_GetTypes,
} from "./container_AwsClusterControlPlaneMainVolume";
import {
  container_AwsClusterControlPlaneDatabaseEncryption,
  container_AwsClusterControlPlaneDatabaseEncryption_GetTypes,
} from "./container_AwsClusterControlPlaneDatabaseEncryption";

export interface container_AwsClusterControlPlane {
  // The ARN of the AWS KMS key used to encrypt cluster secrets.
  databaseEncryption?: container_AwsClusterControlPlaneDatabaseEncryption;

  // The name of the AWS IAM instance pofile to assign to each control plane replica.
  iamInstanceProfile?: string;

  // Details of placement information for an instance.
  instancePlacement?: container_AwsClusterControlPlaneInstancePlacement;

  // Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.
  instanceType?: string;

  // Proxy configuration for outbound HTTP(S) traffic.
  proxyConfig?: container_AwsClusterControlPlaneProxyConfig;

  // Optional. Configuration related to the root volume provisioned for each control plane replica. Volumes will be provisioned in the availability zone associated with the corresponding subnet. When unspecified, it defaults to 32 GiB with the GP2 volume type.
  rootVolume?: container_AwsClusterControlPlaneRootVolume;

  // Optional. The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.
  securityGroupIds?: Array<string>;

  // Optional. SSH configuration for how to access the underlying control plane machines.
  sshConfig?: container_AwsClusterControlPlaneSshConfig;

  // The list of subnets where control plane replicas will run. A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).
  subnetIds?: Array<string>;

  // The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .
  version?: string;

  // Authentication configuration for management of AWS resources.
  awsServicesAuthentication?: container_AwsClusterControlPlaneAwsServicesAuthentication;

  // The ARN of the AWS KMS key used to encrypt cluster configuration.
  configEncryption?: container_AwsClusterControlPlaneConfigEncryption;

  // Optional. Configuration related to the main volume provisioned for each control plane replica. The main volume is in charge of storing all of the cluster's etcd state. Volumes will be provisioned in the availability zone associated with the corresponding subnet. When unspecified, it defaults to 8 GiB with the GP2 volume type.
  mainVolume?: container_AwsClusterControlPlaneMainVolume;

  // Optional. A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
  tags?: Map<string, string>;
}

export function container_AwsClusterControlPlane_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "rootVolume",
      "Optional. Configuration related to the root volume provisioned for each control plane replica. Volumes will be provisioned in the availability zone associated with the corresponding subnet. When unspecified, it defaults to 32 GiB with the GP2 volume type.",
      container_AwsClusterControlPlaneRootVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "The list of subnets where control plane replicas will run. A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "awsServicesAuthentication",
      "Authentication configuration for management of AWS resources.",
      container_AwsClusterControlPlaneAwsServicesAuthentication_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "configEncryption",
      "The ARN of the AWS KMS key used to encrypt cluster configuration.",
      container_AwsClusterControlPlaneConfigEncryption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "iamInstanceProfile",
      "The name of the AWS IAM instance pofile to assign to each control plane replica.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "instancePlacement",
      "Details of placement information for an instance.",
      container_AwsClusterControlPlaneInstancePlacement_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sshConfig",
      "Optional. SSH configuration for how to access the underlying control plane machines.",
      container_AwsClusterControlPlaneSshConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "databaseEncryption",
      "The ARN of the AWS KMS key used to encrypt cluster secrets.",
      container_AwsClusterControlPlaneDatabaseEncryption_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "mainVolume",
      "Optional. Configuration related to the main volume provisioned for each control plane replica. The main volume is in charge of storing all of the cluster's etcd state. Volumes will be provisioned in the availability zone associated with the corresponding subnet. When unspecified, it defaults to 8 GiB with the GP2 volume type.",
      container_AwsClusterControlPlaneMainVolume_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Optional. A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "proxyConfig",
      "Proxy configuration for outbound HTTP(S) traffic.",
      container_AwsClusterControlPlaneProxyConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "Optional. The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
