import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity";
import {
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig,
  Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig_GetTypes,
} from "./Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig";

export interface Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig {
  // The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see /regions/global/default` - `default`
  Network?: string;

  // The type of IPv6 access for a cluster. Possible values: PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED, INHERIT_FROM_SUBNETWORK, OUTBOUND, BIDIRECTIONAL
  PrivateIpv6GoogleAccess?: string;

  // The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: - https://www.googleapis.com/auth/cloud.useraccounts.readonly - https://www.googleapis.com/auth/devstorage.read_write - https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: - https://www.googleapis.com/auth/bigquery - https://www.googleapis.com/auth/bigtable.admin.table - https://www.googleapis.com/auth/bigtable.data - https://www.googleapis.com/auth/devstorage.full_control
  ServiceAccountScopes?: Array<string>;

  // The Compute Engine tags to add to all instances (see (https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
  Tags?: Array<string>;

  // If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.
  InternalIpOnly?: boolean;

  // Node Group Affinity for sole-tenant clusters.
  NodeGroupAffinity?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity;

  // Reservation Affinity for consuming Zonal reservation.
  ReservationAffinity?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity;

  // The (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
  ServiceAccount?: string;

  // Shielded Instance Config for clusters using [Compute Engine Shielded VMs](https://cloud.google.com/security/shielded-cloud/shielded-vm). Structure defined below.
  ShieldedInstanceConfig?: Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig;

  // The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: - `https://www.googleapis.com/compute/v1/projects//regions/us-east1/subnetworks/sub0` - `sub0`
  Subnetwork?: string;

  // The zone where the Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present. A full URL, partial URI, or short name are valid. Examples: - `https://www.googleapis.com/compute/v1/projects/` - `us-central1-f`
  Zone?: string;

  // The Compute Engine metadata entries to add to all instances (see (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
  Metadata?: Map<string, string>;
}

export function Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "The Compute Engine tags to add to all instances (see (https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "InternalIpOnly",
      "If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ReservationAffinity",
      "Reservation Affinity for consuming Zonal reservation.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Subnetwork",
      "The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects//regions/us-east1/subnetworks/sub0` * `sub0`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Network",
      'The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see /regions/global/default` * `default`',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrivateIpv6GoogleAccess",
      "The type of IPv6 access for a cluster. Possible values: PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED, INHERIT_FROM_SUBNETWORK, OUTBOUND, BIDIRECTIONAL",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ServiceAccountScopes",
      "The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: * https://www.googleapis.com/auth/cloud.useraccounts.readonly * https://www.googleapis.com/auth/devstorage.read_write * https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: * https://www.googleapis.com/auth/bigquery * https://www.googleapis.com/auth/bigtable.admin.table * https://www.googleapis.com/auth/bigtable.data * https://www.googleapis.com/auth/devstorage.full_control",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NodeGroupAffinity",
      "Node Group Affinity for sole-tenant clusters.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      "The (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ShieldedInstanceConfig",
      "Shielded Instance Config for clusters using [Compute Engine Shielded VMs](https://cloud.google.com/security/shielded-cloud/shielded-vm). Structure defined below.",
      Dataproc_WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Zone",
      'The zone where the Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present. A full URL, partial URI, or short name are valid. Examples: * `https://www.googleapis.com/compute/v1/projects/` * `us-central1-f`',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Metadata",
      "The Compute Engine metadata entries to add to all instances (see (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
