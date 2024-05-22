import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig";
import {
  dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity,
  dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity_GetTypes,
} from "./dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity";

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig {
  // Reservation Affinity for consuming Zonal reservation.
  reservationAffinity?: dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity;

  // The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: - https://www.googleapis.com/auth/cloud.useraccounts.readonly - https://www.googleapis.com/auth/devstorage.read_write - https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: - https://www.googleapis.com/auth/bigquery - https://www.googleapis.com/auth/bigtable.admin.table - https://www.googleapis.com/auth/bigtable.data - https://www.googleapis.com/auth/devstorage.full_control
  serviceAccountScopes?: Array<string>;

  // Shielded Instance Config for clusters using [Compute Engine Shielded VMs](https://cloud.google.com/security/shielded-cloud/shielded-vm). Structure defined below.
  shieldedInstanceConfig?: dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig;

  // The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: - `https://www.googleapis.com/compute/v1/projects//regions/us-east1/subnetworks/sub0` - `sub0`
  subnetwork?: string;

  // The Compute Engine tags to add to all instances (see (https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
  tags?: Array<string>;

  // The Compute Engine metadata entries to add to all instances (see (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
  metadata?: Map<string, string>;

  // The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see /regions/global/default` - `default`
  network?: string;

  // Node Group Affinity for sole-tenant clusters.
  nodeGroupAffinity?: dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity;

  // The zone where the Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present. A full URL, partial URI, or short name are valid. Examples: - `https://www.googleapis.com/compute/v1/projects/` - `us-central1-f`
  zone?: string;

  // If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.
  internalIpOnly?: boolean;

  // The type of IPv6 access for a cluster. Possible values: PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED, INHERIT_FROM_SUBNETWORK, OUTBOUND, BIDIRECTIONAL
  privateIpv6GoogleAccess?: string;

  // The (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
  serviceAccount?: string;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "metadata",
      "The Compute Engine metadata entries to add to all instances (see (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "zone",
      'The zone where the Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/` * `us-central1-f`',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "internalIpOnly",
      "If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetwork",
      "The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects//regions/us-east1/subnetworks/sub0` * `sub0`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "The Compute Engine tags to add to all instances (see (https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      'The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see /regions/global/default` * `default`',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nodeGroupAffinity",
      "Node Group Affinity for sole-tenant clusters.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateIpv6GoogleAccess",
      "The type of IPv6 access for a cluster. Possible values: PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED, INHERIT_FROM_SUBNETWORK, OUTBOUND, BIDIRECTIONAL",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "reservationAffinity",
      "Reservation Affinity for consuming Zonal reservation.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "serviceAccountScopes",
      "The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: * https://www.googleapis.com/auth/cloud.useraccounts.readonly * https://www.googleapis.com/auth/devstorage.read_write * https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: * https://www.googleapis.com/auth/bigquery * https://www.googleapis.com/auth/bigtable.admin.table * https://www.googleapis.com/auth/bigtable.data * https://www.googleapis.com/auth/devstorage.full_control",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "shieldedInstanceConfig",
      "Shielded Instance Config for clusters using [Compute Engine Shielded VMs](https://cloud.google.com/security/shielded-cloud/shielded-vm). Structure defined below.",
      dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      "The (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.",
      [],
      false,
      true,
    ),
  ];
}
