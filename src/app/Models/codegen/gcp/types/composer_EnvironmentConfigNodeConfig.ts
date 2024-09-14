import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  composer_EnvironmentConfigNodeConfigIpAllocationPolicy,
  composer_EnvironmentConfigNodeConfigIpAllocationPolicy_GetTypes,
} from "./composer_EnvironmentConfigNodeConfigIpAllocationPolicy";

export interface composer_EnvironmentConfigNodeConfig {
  // Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent
  enableIpMasqAgent?: boolean;

  // The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  machineType?: string;

  // The maximum pods per node in the GKE cluster allocated during environment creation. Lowering this value reduces IP address consumption by the Cloud Composer Kubernetes cluster. This value can only be set during environment creation, and only if the environment is VPC-Native. The range of possible values is 8-110, and the default is 32. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  maxPodsPerNode?: number;

  // The set of Google API scopes to be made available on all node VMs. Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  oauthScopes?: Array<string>;

  // The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated.
  tags?: Array<string>;

  // The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region.
  subnetwork?: string;

  // The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  zone?: string;

  // IPv4 cidr range that will be used by Composer internal components.
  composerInternalIpv4CidrBlock?: string;

  // PSC (Private Service Connect) Network entry point. Customers can pre-create the Network Attachment and point Cloud Composer environment to use. It is possible to share network attachment among many environments, provided enough IP addresses are available.
  composerNetworkAttachment?: string;

  // The disk size in GB used for node VMs. Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.-.--airflow--.-.-.
  diskSizeGb?: number;

  // Configuration for controlling how IPs are allocated in the GKE cluster. Cannot be updated.
  ipAllocationPolicy?: composer_EnvironmentConfigNodeConfigIpAllocationPolicy;

  // The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.
  network?: string;

  // The Google Cloud Platform Service Account to be used by the node VMs. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.
  serviceAccount?: string;
}

export function composer_EnvironmentConfigNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableIpMasqAgent",
      "Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxPodsPerNode",
      "The maximum pods per node in the GKE cluster allocated during environment creation. Lowering this value reduces IP address consumption by the Cloud Composer Kubernetes cluster. This value can only be set during environment creation, and only if the environment is VPC-Native. The range of possible values is 8-110, and the default is 32. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "oauthScopes",
      'The set of Google API scopes to be made available on all node VMs. Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "zone",
      'The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment\'s project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskSizeGb",
      "The disk size in GB used for node VMs. Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      'The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment\'s project and region/zone. The network must belong to the environment\'s project. If unspecified, the "default" network ID in the environment\'s project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      'The Google Cloud Platform Service Account to be used by the node VMs. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineType",
      'The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment\'s project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetwork",
      'The Compute Engine subnetwork to be used for machine communications, specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment\'s project and region.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "composerInternalIpv4CidrBlock",
      "IPv4 cidr range that will be used by Composer internal components.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "composerNetworkAttachment",
      "PSC (Private Service Connect) Network entry point. Customers can pre-create the Network Attachment and point Cloud Composer environment to use. It is possible to share network attachment among many environments, provided enough IP addresses are available.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ipAllocationPolicy",
      "Configuration for controlling how IPs are allocated in the GKE cluster. Cannot be updated.",
      () => composer_EnvironmentConfigNodeConfigIpAllocationPolicy_GetTypes(),
      false,
      true,
    ),
  ];
}
