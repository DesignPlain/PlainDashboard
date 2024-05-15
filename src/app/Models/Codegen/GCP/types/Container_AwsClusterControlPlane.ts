import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AwsClusterControlPlaneSshConfig,
  Container_AwsClusterControlPlaneSshConfig_GetTypes,
} from "./Container_AwsClusterControlPlaneSshConfig";
import {
  Container_AwsClusterControlPlaneConfigEncryption,
  Container_AwsClusterControlPlaneConfigEncryption_GetTypes,
} from "./Container_AwsClusterControlPlaneConfigEncryption";
import {
  Container_AwsClusterControlPlaneMainVolume,
  Container_AwsClusterControlPlaneMainVolume_GetTypes,
} from "./Container_AwsClusterControlPlaneMainVolume";
import {
  Container_AwsClusterControlPlaneAwsServicesAuthentication,
  Container_AwsClusterControlPlaneAwsServicesAuthentication_GetTypes,
} from "./Container_AwsClusterControlPlaneAwsServicesAuthentication";
import {
  Container_AwsClusterControlPlaneDatabaseEncryption,
  Container_AwsClusterControlPlaneDatabaseEncryption_GetTypes,
} from "./Container_AwsClusterControlPlaneDatabaseEncryption";
import {
  Container_AwsClusterControlPlaneInstancePlacement,
  Container_AwsClusterControlPlaneInstancePlacement_GetTypes,
} from "./Container_AwsClusterControlPlaneInstancePlacement";
import {
  Container_AwsClusterControlPlaneProxyConfig,
  Container_AwsClusterControlPlaneProxyConfig_GetTypes,
} from "./Container_AwsClusterControlPlaneProxyConfig";
import {
  Container_AwsClusterControlPlaneRootVolume,
  Container_AwsClusterControlPlaneRootVolume_GetTypes,
} from "./Container_AwsClusterControlPlaneRootVolume";

export interface Container_AwsClusterControlPlane {
  // Proxy configuration for outbound HTTP(S) traffic.
  ProxyConfig?: Container_AwsClusterControlPlaneProxyConfig;

  // The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .
  Version?: string;

  // Optional. Configuration related to the root volume provisioned for each control plane replica. Volumes will be provisioned in the availability zone associated with the corresponding subnet. When unspecified, it defaults to 32 GiB with the GP2 volume type.
  RootVolume?: Container_AwsClusterControlPlaneRootVolume;

  // Optional. The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.
  SecurityGroupIds?: Array<string>;

  // Optional. SSH configuration for how to access the underlying control plane machines.
  SshConfig?: Container_AwsClusterControlPlaneSshConfig;

  // The ARN of the AWS KMS key used to encrypt cluster configuration.
  ConfigEncryption?: Container_AwsClusterControlPlaneConfigEncryption;

  // Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.
  InstanceType?: string;

  // Optional. Configuration related to the main volume provisioned for each control plane replica. The main volume is in charge of storing all of the cluster's etcd state. Volumes will be provisioned in the availability zone associated with the corresponding subnet. When unspecified, it defaults to 8 GiB with the GP2 volume type.
  MainVolume?: Container_AwsClusterControlPlaneMainVolume;

  // The name of the AWS IAM instance pofile to assign to each control plane replica.
  IamInstanceProfile?: string;

  // The list of subnets where control plane replicas will run. A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).
  SubnetIds?: Array<string>;

  // Optional. A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
  Tags?: Map<string, string>;

  // Authentication configuration for management of AWS resources.
  AwsServicesAuthentication?: Container_AwsClusterControlPlaneAwsServicesAuthentication;

  // The ARN of the AWS KMS key used to encrypt cluster secrets.
  DatabaseEncryption?: Container_AwsClusterControlPlaneDatabaseEncryption;

  // Details of placement information for an instance.
  InstancePlacement?: Container_AwsClusterControlPlaneInstancePlacement;
}

export function Container_AwsClusterControlPlane_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SshConfig",
      "Optional. SSH configuration for how to access the underlying control plane machines.",
      Container_AwsClusterControlPlaneSshConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AwsServicesAuthentication",
      "Authentication configuration for management of AWS resources.",
      Container_AwsClusterControlPlaneAwsServicesAuthentication_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SubnetIds",
      "The list of subnets where control plane replicas will run. A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Tags",
      "Optional. A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "InstancePlacement",
      "Details of placement information for an instance.",
      Container_AwsClusterControlPlaneInstancePlacement_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ProxyConfig",
      "Proxy configuration for outbound HTTP(S) traffic.",
      Container_AwsClusterControlPlaneProxyConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InstanceType",
      "Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MainVolume",
      "Optional. Configuration related to the main volume provisioned for each control plane replica. The main volume is in charge of storing all of the cluster's etcd state. Volumes will be provisioned in the availability zone associated with the corresponding subnet. When unspecified, it defaults to 8 GiB with the GP2 volume type.",
      Container_AwsClusterControlPlaneMainVolume_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DatabaseEncryption",
      "The ARN of the AWS KMS key used to encrypt cluster secrets.",
      Container_AwsClusterControlPlaneDatabaseEncryption_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RootVolume",
      "Optional. Configuration related to the root volume provisioned for each control plane replica. Volumes will be provisioned in the availability zone associated with the corresponding subnet. When unspecified, it defaults to 32 GiB with the GP2 volume type.",
      Container_AwsClusterControlPlaneRootVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IamInstanceProfile",
      "The name of the AWS IAM instance pofile to assign to each control plane replica.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SecurityGroupIds",
      "Optional. The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConfigEncryption",
      "The ARN of the AWS KMS key used to encrypt cluster configuration.",
      Container_AwsClusterControlPlaneConfigEncryption_GetTypes(),
      true,
      false,
    ),
  ];
}
