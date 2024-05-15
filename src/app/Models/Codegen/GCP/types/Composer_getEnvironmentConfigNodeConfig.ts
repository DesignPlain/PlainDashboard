import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Composer_getEnvironmentConfigNodeConfigIpAllocationPolicy,
  Composer_getEnvironmentConfigNodeConfigIpAllocationPolicy_GetTypes,
} from "./Composer_getEnvironmentConfigNodeConfigIpAllocationPolicy";

export interface Composer_getEnvironmentConfigNodeConfig {
  // IPv4 cidr range that will be used by Composer internal components.
  ComposerInternalIpv4CidrBlock?: string;

  // The disk size in GB used for node VMs. Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  DiskSizeGb?: number;

  // Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent
  EnableIpMasqAgent?: boolean;

  // Configuration for controlling how IPs are allocated in the GKE cluster. Cannot be updated.
  IpAllocationPolicies?: Array<Composer_getEnvironmentConfigNodeConfigIpAllocationPolicy>;

  // The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated.
  Tags?: Array<string>;

  // PSC (Private Service Connect) Network entry point. Customers can pre-create the Network Attachment and point Cloud Composer environment to use. It is possible to share network attachment among many environments, provided enough IP addresses are available.
  ComposerNetworkAttachment?: string;

  // The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  MachineType?: string;

  // The maximum pods per node in the GKE cluster allocated during environment creation. Lowering this value reduces IP address consumption by the Cloud Composer Kubernetes cluster. This value can only be set during environment creation, and only if the environment is VPC-Native. The range of possible values is 8-110, and the default is 32. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  MaxPodsPerNode?: number;

  // The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.
  Network?: string;

  // The set of Google API scopes to be made available on all node VMs. Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  OauthScopes?: Array<string>;

  // The Google Cloud Platform Service Account to be used by the node VMs. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.
  ServiceAccount?: string;

  // The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region.
  Subnetwork?: string;

  // The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  Zone?: string;
}

export function Composer_getEnvironmentConfigNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Network",
      'The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment\'s project and region/zone. The network must belong to the environment\'s project. If unspecified, the "default" network ID in the environment\'s project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "OauthScopes",
      'The set of Google API scopes to be made available on all node VMs. Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      'The Google Cloud Platform Service Account to be used by the node VMs. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Zone",
      'The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment\'s project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ComposerNetworkAttachment",
      "PSC (Private Service Connect) Network entry point. Customers can pre-create the Network Attachment and point Cloud Composer environment to use. It is possible to share network attachment among many environments, provided enough IP addresses are available.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      'The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment\'s project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxPodsPerNode",
      "The maximum pods per node in the GKE cluster allocated during environment creation. Lowering this value reduces IP address consumption by the Cloud Composer Kubernetes cluster. This value can only be set during environment creation, and only if the environment is VPC-Native. The range of possible values is 8-110, and the default is 32. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ComposerInternalIpv4CidrBlock",
      "IPv4 cidr range that will be used by Composer internal components.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskSizeGb",
      "The disk size in GB used for node VMs. Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableIpMasqAgent",
      "Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IpAllocationPolicies",
      "Configuration for controlling how IPs are allocated in the GKE cluster. Cannot be updated.",
      Composer_getEnvironmentConfigNodeConfigIpAllocationPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Subnetwork",
      'The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment\'s project and region.',
      [],
      true,
      false,
    ),
  ];
}
