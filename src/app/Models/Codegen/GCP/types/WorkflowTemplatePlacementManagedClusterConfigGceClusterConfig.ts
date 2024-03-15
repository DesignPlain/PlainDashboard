import { WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity } from "./WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity";
import { WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig } from "./WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig";
import { WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity } from "./WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity";

export interface WorkflowTemplatePlacementManagedClusterConfigGceClusterConfig {
  // The type of IPv6 access for a cluster. Possible values: PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED, INHERIT_FROM_SUBNETWORK, OUTBOUND, BIDIRECTIONAL
  PrivateIpv6GoogleAccess?: string;

  // Reservation Affinity for consuming Zonal reservation.
  ReservationAffinity?: WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity;

  // Shielded Instance Config for clusters using [Compute Engine Shielded VMs](https://cloud.google.com/security/shielded-cloud/shielded-vm). Structure defined below.
  ShieldedInstanceConfig?: WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig;

  // The Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri. A full URL, partial URI, or short name are valid. Examples: - `https://www.googleapis.com/compute/v1/projects//regions/us-east1/subnetworks/sub0` - `sub0`
  Subnetwork?: string;

  // The Compute Engine tags to add to all instances (see (https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
  Tags?: Array<string>;

  // The Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither `network_uri` nor `subnetwork_uri` is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see /regions/global/default` - `default`
  Network?: string;

  // The Compute Engine metadata entries to add to all instances (see (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
  Metadata?: Map<string, string>;

  // Node Group Affinity for sole-tenant clusters.
  NodeGroupAffinity?: WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity;

  // The (https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used.
  ServiceAccount?: string;

  // The URIs of service account scopes to be included in Compute Engine instances. The following base set of scopes is always included: - https://www.googleapis.com/auth/cloud.useraccounts.readonly - https://www.googleapis.com/auth/devstorage.read_write - https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: - https://www.googleapis.com/auth/bigquery - https://www.googleapis.com/auth/bigtable.admin.table - https://www.googleapis.com/auth/bigtable.data - https://www.googleapis.com/auth/devstorage.full_control
  ServiceAccountScopes?: Array<string>;

  // The zone where the Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a non-global Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be present. A full URL, partial URI, or short name are valid. Examples: - `https://www.googleapis.com/compute/v1/projects/` - `us-central1-f`
  Zone?: string;

  // If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. This `internal_ip_only` restriction can only be enabled for subnetwork enabled networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.
  InternalIpOnly?: boolean;
}
