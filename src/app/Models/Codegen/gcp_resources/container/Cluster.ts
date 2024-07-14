import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_ClusterMasterAuthorizedNetworksConfig,
  container_ClusterMasterAuthorizedNetworksConfig_GetTypes,
} from "../types/container_ClusterMasterAuthorizedNetworksConfig";
import {
  container_ClusterMaintenancePolicy,
  container_ClusterMaintenancePolicy_GetTypes,
} from "../types/container_ClusterMaintenancePolicy";
import {
  container_ClusterAddonsConfig,
  container_ClusterAddonsConfig_GetTypes,
} from "../types/container_ClusterAddonsConfig";
import {
  container_ClusterIdentityServiceConfig,
  container_ClusterIdentityServiceConfig_GetTypes,
} from "../types/container_ClusterIdentityServiceConfig";
import {
  container_ClusterMonitoringConfig,
  container_ClusterMonitoringConfig_GetTypes,
} from "../types/container_ClusterMonitoringConfig";
import {
  container_ClusterAuthenticatorGroupsConfig,
  container_ClusterAuthenticatorGroupsConfig_GetTypes,
} from "../types/container_ClusterAuthenticatorGroupsConfig";
import {
  container_ClusterNodeConfig,
  container_ClusterNodeConfig_GetTypes,
} from "../types/container_ClusterNodeConfig";
import {
  container_ClusterDefaultSnatStatus,
  container_ClusterDefaultSnatStatus_GetTypes,
} from "../types/container_ClusterDefaultSnatStatus";
import {
  container_ClusterReleaseChannel,
  container_ClusterReleaseChannel_GetTypes,
} from "../types/container_ClusterReleaseChannel";
import {
  container_ClusterNetworkPolicy,
  container_ClusterNetworkPolicy_GetTypes,
} from "../types/container_ClusterNetworkPolicy";
import {
  container_ClusterFleet,
  container_ClusterFleet_GetTypes,
} from "../types/container_ClusterFleet";
import {
  container_ClusterEnableK8sBetaApis,
  container_ClusterEnableK8sBetaApis_GetTypes,
} from "../types/container_ClusterEnableK8sBetaApis";
import {
  container_ClusterClusterTelemetry,
  container_ClusterClusterTelemetry_GetTypes,
} from "../types/container_ClusterClusterTelemetry";
import {
  container_ClusterTpuConfig,
  container_ClusterTpuConfig_GetTypes,
} from "../types/container_ClusterTpuConfig";
import {
  container_ClusterBinaryAuthorization,
  container_ClusterBinaryAuthorization_GetTypes,
} from "../types/container_ClusterBinaryAuthorization";
import {
  container_ClusterMasterAuth,
  container_ClusterMasterAuth_GetTypes,
} from "../types/container_ClusterMasterAuth";
import {
  container_ClusterWorkloadAltsConfig,
  container_ClusterWorkloadAltsConfig_GetTypes,
} from "../types/container_ClusterWorkloadAltsConfig";
import {
  container_ClusterCostManagementConfig,
  container_ClusterCostManagementConfig_GetTypes,
} from "../types/container_ClusterCostManagementConfig";
import {
  container_ClusterLoggingConfig,
  container_ClusterLoggingConfig_GetTypes,
} from "../types/container_ClusterLoggingConfig";
import {
  container_ClusterResourceUsageExportConfig,
  container_ClusterResourceUsageExportConfig_GetTypes,
} from "../types/container_ClusterResourceUsageExportConfig";
import {
  container_ClusterDnsConfig,
  container_ClusterDnsConfig_GetTypes,
} from "../types/container_ClusterDnsConfig";
import {
  container_ClusterProtectConfig,
  container_ClusterProtectConfig_GetTypes,
} from "../types/container_ClusterProtectConfig";
import {
  container_ClusterWorkloadIdentityConfig,
  container_ClusterWorkloadIdentityConfig_GetTypes,
} from "../types/container_ClusterWorkloadIdentityConfig";
import {
  container_ClusterIpAllocationPolicy,
  container_ClusterIpAllocationPolicy_GetTypes,
} from "../types/container_ClusterIpAllocationPolicy";
import {
  container_ClusterMeshCertificates,
  container_ClusterMeshCertificates_GetTypes,
} from "../types/container_ClusterMeshCertificates";
import {
  container_ClusterGatewayApiConfig,
  container_ClusterGatewayApiConfig_GetTypes,
} from "../types/container_ClusterGatewayApiConfig";
import {
  container_ClusterPrivateClusterConfig,
  container_ClusterPrivateClusterConfig_GetTypes,
} from "../types/container_ClusterPrivateClusterConfig";
import {
  container_ClusterSecurityPostureConfig,
  container_ClusterSecurityPostureConfig_GetTypes,
} from "../types/container_ClusterSecurityPostureConfig";
import {
  container_ClusterVerticalPodAutoscaling,
  container_ClusterVerticalPodAutoscaling_GetTypes,
} from "../types/container_ClusterVerticalPodAutoscaling";
import {
  container_ClusterNotificationConfig,
  container_ClusterNotificationConfig_GetTypes,
} from "../types/container_ClusterNotificationConfig";
import {
  container_ClusterConfidentialNodes,
  container_ClusterConfidentialNodes_GetTypes,
} from "../types/container_ClusterConfidentialNodes";
import {
  container_ClusterNodePoolDefaults,
  container_ClusterNodePoolDefaults_GetTypes,
} from "../types/container_ClusterNodePoolDefaults";
import {
  container_ClusterNodePool,
  container_ClusterNodePool_GetTypes,
} from "../types/container_ClusterNodePool";
import {
  container_ClusterPodSecurityPolicyConfig,
  container_ClusterPodSecurityPolicyConfig_GetTypes,
} from "../types/container_ClusterPodSecurityPolicyConfig";
import {
  container_ClusterDatabaseEncryption,
  container_ClusterDatabaseEncryption_GetTypes,
} from "../types/container_ClusterDatabaseEncryption";
import {
  container_ClusterClusterAutoscaling,
  container_ClusterClusterAutoscaling_GetTypes,
} from "../types/container_ClusterClusterAutoscaling";
import {
  container_ClusterServiceExternalIpsConfig,
  container_ClusterServiceExternalIpsConfig_GetTypes,
} from "../types/container_ClusterServiceExternalIpsConfig";
import {
  container_ClusterNodePoolAutoConfig,
  container_ClusterNodePoolAutoConfig_GetTypes,
} from "../types/container_ClusterNodePoolAutoConfig";

export interface ClusterArgs {
  /*
Configuration options for the Binary
Authorization feature. Structure is documented below.
*/
  binaryAuthorization?: container_ClusterBinaryAuthorization;

  /*
The name of the cluster, unique within the project and
location.

- - -
*/
  name?: string;

  /*
Configuration options for the
[NetworkPolicy](https://kubernetes.io/docs/concepts/services-networking/networkpolicies/)
feature. Structure is documented below.
*/
  networkPolicy?: container_ClusterNetworkPolicy;

  // Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. Structure is documented below.
  nodePoolDefaults?: container_ClusterNodePoolDefaults;

  /*
The Kubernetes version on the nodes. Must either be unset
or set to the same value as `min_master_version` on create. Defaults to the default
version set by GKE which is not necessarily the latest version. This only affects
nodes in the default node pool. While a fuzzy version can be specified, it's
recommended that you specify explicit versions as the provider will see spurious diffs
when fuzzy versions are used. See the `gcp.container.getEngineVersions` data source's
`version_prefix` field to approximate fuzzy versions.
To update nodes in other node pools, use the `version` attribute on the node pool.
*/
  nodeVersion?: string;

  // Fleet configuration for the cluster. Structure is documented below.
  fleet?: container_ClusterFleet;

  // Configuration for [GKE Gateway API controller](https://cloud.google.com/kubernetes-engine/docs/concepts/gateway-api). Structure is documented below.
  gatewayApiConfig?: container_ClusterGatewayApiConfig;

  /*
Configuration for [private clusters](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters),
clusters with private nodes. Structure is documented below.
*/
  privateClusterConfig?: container_ClusterPrivateClusterConfig;

  /*
List of node pools associated with this cluster.
See gcp.container.NodePool for schema.
--Warning:-- node pools defined inside a cluster can't be changed (or added/removed) after
cluster creation without deleting and recreating the entire cluster. Unless you absolutely need the ability
to say "these are the _only_ node pools associated with this cluster", use the
gcp.container.NodePool resource instead of this property.
*/
  nodePools?: Array<container_ClusterNodePool>;

  /*
Configuration for the
[PodSecurityPolicy](https://cloud.google.com/kubernetes-engine/docs/how-to/pod-security-policies) feature.
Structure is documented below.
*/
  podSecurityPolicyConfig?: container_ClusterPodSecurityPolicyConfig;

  // The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4).
  privateIpv6GoogleAccess?: string;

  /*
The name or self_link of the Google Compute Engine
subnetwork in which the cluster's instances are launched.
*/
  subnetwork?: string;

  // Structure is documented below.
  databaseEncryption?: container_ClusterDatabaseEncryption;

  // Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
  enableIntranodeVisibility?: boolean;

  /*
The maintenance policy to use for the cluster. Structure is
documented below.
*/
  maintenancePolicy?: container_ClusterMaintenancePolicy;

  /*
The authentication information for accessing the
Kubernetes master. Some values in this block are only returned by the API if
your service account has permission to get credentials for your GKE cluster. If
you see an unexpected diff unsetting your client cert, ensure you have the
`container.clusters.getCredentials` permission.
Structure is documented below.
*/
  masterAuth?: container_ClusterMasterAuth;

  /*
The IP address range of the Kubernetes pods
in this cluster in CIDR notation (e.g. `10.96.0.0/14`). Leave blank to have one
automatically chosen or specify a `/14` block in `10.0.0.0/8`. This field will
default a new cluster to routes-based, where `ip_allocation_policy` is not defined.
*/
  clusterIpv4Cidr?: string;

  // Configuration for [Using Cloud DNS for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/cloud-dns). Structure is documented below.
  dnsConfig?: container_ClusterDnsConfig;

  /*
The monitoring service that the cluster
should write metrics to.
Automatically send metrics from pods in the cluster to the Google Cloud Monitoring API.
VM metrics will be collected by Google Compute Engine regardless of this setting
Available options include
`monitoring.googleapis.com`(Legacy Stackdriver), `monitoring.googleapis.com/kubernetes`(Stackdriver Kubernetes Engine Monitoring), and `none`.
Defaults to `monitoring.googleapis.com/kubernetes`
*/
  monitoringService?: string;

  /*
If `true`, deletes the default node
pool upon cluster creation. If you're using `gcp.container.NodePool`
resources with no default node pool, this should be set to `true`, alongside
setting `initial_node_count` to at least `1`.
*/
  removeDefaultNodePool?: boolean;

  // Enable/Disable Security Posture API features for the cluster. Structure is documented below.
  securityPostureConfig?: container_ClusterSecurityPostureConfig;

  /*
The configuration for addons supported by GKE.
Structure is documented below.
*/
  addonsConfig?: container_ClusterAddonsConfig;

  // . Structure is documented below.
  identityServiceConfig?: container_ClusterIdentityServiceConfig;

  /*
Logging configuration for the cluster.
Structure is documented below.
*/
  loggingConfig?: container_ClusterLoggingConfig;

  // Enable/Disable Protect API features for the cluster. Structure is documented below.
  protectConfig?: container_ClusterProtectConfig;

  /*
Per-cluster configuration of Node Auto-Provisioning with Cluster Autoscaler to
automatically adjust the size of the cluster and create/delete node pools based
on the current needs of the cluster's workload. See the
[guide to using Node Auto-Provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)
for more details. Structure is documented below.
*/
  clusterAutoscaling?: container_ClusterClusterAutoscaling;

  /*
The logging service that the cluster should
write logs to. Available options include `logging.googleapis.com`(Legacy Stackdriver),
`logging.googleapis.com/kubernetes`(Stackdriver Kubernetes Engine Logging), and `none`. Defaults to `logging.googleapis.com/kubernetes`
*/
  loggingService?: string;

  /*
Monitoring configuration for the cluster.
Structure is documented below.
*/
  monitoringConfig?: container_ClusterMonitoringConfig;

  // Structure is documented below.
  serviceExternalIpsConfig?: container_ClusterServiceExternalIpsConfig;

  /*
Workload Identity allows Kubernetes service accounts to act as a user-managed
[Google IAM Service Account](https://cloud.google.com/iam/docs/service-accounts#user-managed_service_accounts).
Structure is documented below.
*/
  workloadIdentityConfig?: container_ClusterWorkloadIdentityConfig;

  /*
Configuration for the
[Google Groups for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control#groups-setup-gsuite) feature.
Structure is documented below.
*/
  authenticatorGroupsConfig?: container_ClusterAuthenticatorGroupsConfig;

  /*
Whether or not to allow Terraform to destroy the instance. Defaults to true. Unless this field is set to false in
Terraform state, a terraform destroy or terraform apply that would delete the cluster will fail.
*/
  deletionProtection?: boolean;

  // Whether FQDN Network Policy is enabled on this cluster. Users who enable this feature for existing Standard clusters must restart the GKE Dataplane V2 `anetd` DaemonSet after enabling it. See the [Enable FQDN Network Policy in an existing cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/fqdn-network-policies#enable_fqdn_network_policy_in_an_existing_cluster) for more information.
  enableFqdnNetworkPolicy?: boolean;

  // Whether L4ILB Subsetting is enabled for this cluster.
  enableL4IlbSubsetting?: boolean;

  /*
The name or self_link of the Google Compute Engine
network to which the cluster is connected. For Shared VPC, set this to the self link of the
shared network.
*/
  network?: string;

  /*
Parameters used in creating the default node pool.
Generally, this field should not be used at the same time as a
`gcp.container.NodePool` or a `node_pool` block; this configuration
manages the default node pool, which isn't recommended to be used.
Structure is documented below.
*/
  nodeConfig?: container_ClusterNodeConfig;

  /*
The list of zones in which the cluster's nodes
are located. Nodes must be in the region of their regional cluster or in the
same region as their cluster's zone for zonal clusters. If this is specified for
a zonal cluster, omit the cluster's zone.

> A "multi-zonal" cluster is a zonal cluster with at least one additional zone
defined; in a multi-zonal cluster, the cluster master is only present in a
single zone while nodes are present in each of the primary zone and the node
locations. In contrast, in a regional cluster, cluster master nodes are present
in multiple zones in the region. For that reason, regional clusters should be
preferred.
*/
  nodeLocations?: Array<string>;

  /*
Configuration for [direct-path (via ALTS) with workload identity.](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#workloadaltsconfig). Structure is documented below.

<a name="nested_default_snat_status"></a>The `default_snat_status` block supports
*/
  workloadAltsConfig?: container_ClusterWorkloadAltsConfig;

  // [GKE SNAT](https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent#how_ipmasq_works) DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster, [API doc](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#networkconfig). Structure is documented below
  defaultSnatStatus?: container_ClusterDefaultSnatStatus;

  /*
The desired
configuration options for master authorized networks. Omit the
nested `cidr_blocks` attribute to disallow external access (except
the cluster node IPs, which GKE automatically whitelists).
Structure is documented below.
*/
  masterAuthorizedNetworksConfig?: container_ClusterMasterAuthorizedNetworksConfig;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
Configuration options for the [Release channel](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
feature, which provide more control over automatic upgrades of your GKE clusters.
When updating this field, GKE imposes specific version requirements. See
[Selecting a new release channel](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels#selecting_a_new_release_channel)
for more details; the `gcp.container.getEngineVersions` datasource can provide
the default version for a channel. Note that removing the `release_channel`
field from your config will cause the provider to stop managing your cluster's
release channel, but will not unenroll it. Instead, use the `"UNSPECIFIED"`
channel. Structure is documented below.
*/
  releaseChannel?: container_ClusterReleaseChannel;

  /*
Vertical Pod Autoscaling automatically adjusts the resources of pods controlled by it.
Structure is documented below.
*/
  verticalPodAutoscaling?: container_ClusterVerticalPodAutoscaling;

  /*
The default maximum number of pods
per node in this cluster. This doesn't work on "routes-based" clusters, clusters
that don't have IP Aliasing enabled. See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)
for more information.
*/
  defaultMaxPodsPerNode?: number;

  /*
Configuration for Kubernetes Beta APIs.
Structure is documented below.
*/
  enableK8sBetaApis?: container_ClusterEnableK8sBetaApis;

  // Whether multi-networking is enabled for this cluster.
  enableMultiNetworking?: boolean;

  /*
Configuration for
[ClusterTelemetry](https://cloud.google.com/monitoring/kubernetes-engine/installing#controlling_the_collection_of_application_logs) feature,
Structure is documented below.
*/
  clusterTelemetry?: container_ClusterClusterTelemetry;

  /*
Configuration of cluster IP allocation for
VPC-native clusters. If this block is unset during creation, it will be set by the GKE backend.
Structure is documented below.
*/
  ipAllocationPolicy?: container_ClusterIpAllocationPolicy;

  /*
The location (region or zone) in which the cluster
master will be created, as well as the default node location. If you specify a
zone (such as `us-central1-a`), the cluster will be a zonal cluster with a
single cluster master. If you specify a region (such as `us-west1`), the
cluster will be a regional cluster with multiple masters spread across zones in
the region, and with default node locations in those zones as well
*/
  location?: string;

  // Configuration for the [cluster upgrade notifications](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-upgrade-notifications) feature. Structure is documented below.
  notificationConfig?: container_ClusterNotificationConfig;

  /*
Configuration for the
[ResourceUsageExportConfig](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-usage-metering) feature.
Structure is documented below.
*/
  resourceUsageExportConfig?: container_ClusterResourceUsageExportConfig;

  // Configuration for [Confidential Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes) feature. Structure is documented below documented below.
  confidentialNodes?: container_ClusterConfidentialNodes;

  /*
Configuration for the
[Cost Allocation](https://cloud.google.com/kubernetes-engine/docs/how-to/cost-allocations) feature.
Structure is documented below.
*/
  costManagementConfig?: container_ClusterCostManagementConfig;

  /*
Whether to enable Kubernetes Alpha features for
this cluster. Note that when this option is enabled, the cluster cannot be upgraded
and will be automatically deleted after 30 days.
*/
  enableKubernetesAlpha?: boolean;

  /*
Enable NET_ADMIN for the cluster. Defaults to
`false`. This field should only be enabled for Autopilot clusters (`enable_autopilot`
set to `true`).
*/
  allowNetAdmin?: boolean;

  /*
Whether the ABAC authorizer is enabled for this cluster.
When enabled, identities in the system, including service accounts, nodes, and controllers,
will have statically granted permissions beyond those provided by the RBAC configuration or IAM.
Defaults to `false`
*/
  enableLegacyAbac?: boolean;

  /*
Whether to enable Cloud TPU resources in this cluster.
See the [official documentation](https://cloud.google.com/tpu/docs/kubernetes-engine-setup).
*/
  enableTpu?: boolean;

  /*
Determines whether alias IPs or routes will be used for pod IPs in the cluster.
Options are `VPC_NATIVE` or `ROUTES`. `VPC_NATIVE` enables [IP aliasing](https://cloud.google.com/kubernetes-engine/docs/how-to/ip-aliases). Newly created clusters will default to `VPC_NATIVE`.
*/
  networkingMode?: string;

  /*
Node pool configs that apply to auto-provisioned node pools in
[autopilot](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview#comparison) clusters and
[node auto-provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)-enabled clusters. Structure is documented below.
*/
  nodePoolAutoConfig?: container_ClusterNodePoolAutoConfig;

  // The GCE resource labels (a map of key/value pairs) to be applied to the cluster.
  resourceLabels?: Map<string, string>;

  /*
Enable Autopilot for this cluster. Defaults to `false`.
Note that when this option is enabled, certain features of Standard GKE are not available.
See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview#comparison)
for available features.
*/
  enableAutopilot?: boolean;

  /*
The number of nodes to create in this
cluster's default node pool. In regional or multi-zonal clusters, this is the
number of nodes per zone. Must be set if `node_pool` is not set. If you're using
`gcp.container.NodePool` objects with no default node pool, you'll need to
set this to a value of at least `1`, alongside setting
`remove_default_node_pool` to `true`.
*/
  initialNodeCount?: number;

  // TPU configuration for the cluster.
  tpuConfig?: container_ClusterTpuConfig;

  // Enable Shielded Nodes features on all nodes in this cluster.  Defaults to `true`.
  enableShieldedNodes?: boolean;

  /*
The minimum version of the master. GKE
will auto-update the master to new versions, so this does not guarantee the
current master version--use the read-only `master_version` field to obtain that.
If unset, the cluster's version will be set by GKE to the version of the most recent
official release (which is not necessarily the latest version).  Most users will find
the `gcp.container.getEngineVersions` data source useful - it indicates which versions
are available. If you intend to specify versions manually,
[the docs](https://cloud.google.com/kubernetes-engine/versioning-and-upgrades#specifying_cluster_version)
describe the various acceptable formats for this field.

> If you are using the `gcp.container.getEngineVersions` datasource with a regional cluster, ensure that you have provided a `location`
to the datasource. A region can have a different set of supported versions than its corresponding zones, and not all zones in a
region are guaranteed to support the same version.
*/
  minMasterVersion?: string;

  // The desired datapath provider for this cluster. This is set to `LEGACY_DATAPATH` by default, which uses the IPTables-based kube-proxy implementation. Set to `ADVANCED_DATAPATH` to enable Dataplane v2.
  datapathProvider?: string;

  // Description of the cluster.
  description?: string;

  // Structure is documented below.
  meshCertificates?: container_ClusterMeshCertificates;
}
export class Cluster extends Resource {
  /*
Configuration for
[ClusterTelemetry](https://cloud.google.com/monitoring/kubernetes-engine/installing#controlling_the_collection_of_application_logs) feature,
Structure is documented below.
*/
  public clusterTelemetry?: container_ClusterClusterTelemetry;

  // Structure is documented below.
  public databaseEncryption?: container_ClusterDatabaseEncryption;

  // [GKE SNAT](https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent#how_ipmasq_works) DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster, [API doc](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#networkconfig). Structure is documented below
  public defaultSnatStatus?: container_ClusterDefaultSnatStatus;

  /*
Whether to enable Cloud TPU resources in this cluster.
See the [official documentation](https://cloud.google.com/tpu/docs/kubernetes-engine-setup).
*/
  public enableTpu?: boolean;

  // Configuration for [GKE Gateway API controller](https://cloud.google.com/kubernetes-engine/docs/concepts/gateway-api). Structure is documented below.
  public gatewayApiConfig?: container_ClusterGatewayApiConfig;

  // The fingerprint of the set of labels for this cluster.
  public labelFingerprint?: string;

  /*
Configuration for the
[Google Groups for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control#groups-setup-gsuite) feature.
Structure is documented below.
*/
  public authenticatorGroupsConfig?: container_ClusterAuthenticatorGroupsConfig;

  /*
Configuration of cluster IP allocation for
VPC-native clusters. If this block is unset during creation, it will be set by the GKE backend.
Structure is documented below.
*/
  public ipAllocationPolicy?: container_ClusterIpAllocationPolicy;

  /*
The monitoring service that the cluster
should write metrics to.
Automatically send metrics from pods in the cluster to the Google Cloud Monitoring API.
VM metrics will be collected by Google Compute Engine regardless of this setting
Available options include
`monitoring.googleapis.com`(Legacy Stackdriver), `monitoring.googleapis.com/kubernetes`(Stackdriver Kubernetes Engine Monitoring), and `none`.
Defaults to `monitoring.googleapis.com/kubernetes`
*/
  public monitoringService?: string;

  /*
Parameters used in creating the default node pool.
Generally, this field should not be used at the same time as a
`gcp.container.NodePool` or a `node_pool` block; this configuration
manages the default node pool, which isn't recommended to be used.
Structure is documented below.
*/
  public nodeConfig?: container_ClusterNodeConfig;

  /*
Node pool configs that apply to auto-provisioned node pools in
[autopilot](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview#comparison) clusters and
[node auto-provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)-enabled clusters. Structure is documented below.
*/
  public nodePoolAutoConfig?: container_ClusterNodePoolAutoConfig;

  /*
List of node pools associated with this cluster.
See gcp.container.NodePool for schema.
--Warning:-- node pools defined inside a cluster can't be changed (or added/removed) after
cluster creation without deleting and recreating the entire cluster. Unless you absolutely need the ability
to say "these are the _only_ node pools associated with this cluster", use the
gcp.container.NodePool resource instead of this property.
*/
  public nodePools?: Array<container_ClusterNodePool>;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  /*
The IP address range of the Cloud TPUs in this cluster, in
[CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
notation (e.g. `1.2.3.4/29`).
*/
  public tpuIpv4CidrBlock?: string;

  /*
Per-cluster configuration of Node Auto-Provisioning with Cluster Autoscaler to
automatically adjust the size of the cluster and create/delete node pools based
on the current needs of the cluster's workload. See the
[guide to using Node Auto-Provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)
for more details. Structure is documented below.
*/
  public clusterAutoscaling?: container_ClusterClusterAutoscaling;

  /*
The maintenance policy to use for the cluster. Structure is
documented below.
*/
  public maintenancePolicy?: container_ClusterMaintenancePolicy;

  /*
Determines whether alias IPs or routes will be used for pod IPs in the cluster.
Options are `VPC_NATIVE` or `ROUTES`. `VPC_NATIVE` enables [IP aliasing](https://cloud.google.com/kubernetes-engine/docs/how-to/ip-aliases). Newly created clusters will default to `VPC_NATIVE`.
*/
  public networkingMode?: string;

  // The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4).
  public privateIpv6GoogleAccess?: string;

  // Enable Shielded Nodes features on all nodes in this cluster.  Defaults to `true`.
  public enableShieldedNodes?: boolean;

  /*
Configuration for [private clusters](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters),
clusters with private nodes. Structure is documented below.
*/
  public privateClusterConfig?: container_ClusterPrivateClusterConfig;

  /*
If `true`, deletes the default node
pool upon cluster creation. If you're using `gcp.container.NodePool`
resources with no default node pool, this should be set to `true`, alongside
setting `initial_node_count` to at least `1`.
*/
  public removeDefaultNodePool?: boolean;

  // The GCE resource labels (a map of key/value pairs) to be applied to the cluster.
  public resourceLabels?: Map<string, string>;

  // The server-defined URL for the resource.
  public selfLink?: string;

  /*
The name of the cluster, unique within the project and
location.

- - -
*/
  public name?: string;

  /*
The name or self_link of the Google Compute Engine
network to which the cluster is connected. For Shared VPC, set this to the self link of the
shared network.
*/
  public network?: string;

  // Whether L4ILB Subsetting is enabled for this cluster.
  public enableL4IlbSubsetting?: boolean;

  // Configuration for [Using Cloud DNS for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/cloud-dns). Structure is documented below.
  public dnsConfig?: container_ClusterDnsConfig;

  /*
The minimum version of the master. GKE
will auto-update the master to new versions, so this does not guarantee the
current master version--use the read-only `master_version` field to obtain that.
If unset, the cluster's version will be set by GKE to the version of the most recent
official release (which is not necessarily the latest version).  Most users will find
the `gcp.container.getEngineVersions` data source useful - it indicates which versions
are available. If you intend to specify versions manually,
[the docs](https://cloud.google.com/kubernetes-engine/versioning-and-upgrades#specifying_cluster_version)
describe the various acceptable formats for this field.

> If you are using the `gcp.container.getEngineVersions` datasource with a regional cluster, ensure that you have provided a `location`
to the datasource. A region can have a different set of supported versions than its corresponding zones, and not all zones in a
region are guaranteed to support the same version.
*/
  public minMasterVersion?: string;

  /*
The Kubernetes version on the nodes. Must either be unset
or set to the same value as `min_master_version` on create. Defaults to the default
version set by GKE which is not necessarily the latest version. This only affects
nodes in the default node pool. While a fuzzy version can be specified, it's
recommended that you specify explicit versions as the provider will see spurious diffs
when fuzzy versions are used. See the `gcp.container.getEngineVersions` data source's
`version_prefix` field to approximate fuzzy versions.
To update nodes in other node pools, use the `version` attribute on the node pool.
*/
  public nodeVersion?: string;

  //
  public operation?: string;

  /*
Whether or not to allow Terraform to destroy the instance. Defaults to true. Unless this field is set to false in
Terraform state, a terraform destroy or terraform apply that would delete the cluster will fail.
*/
  public deletionProtection?: boolean;

  // Whether multi-networking is enabled for this cluster.
  public enableMultiNetworking?: boolean;

  /*
Configuration for [direct-path (via ALTS) with workload identity.](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#workloadaltsconfig). Structure is documented below.

<a name="nested_default_snat_status"></a>The `default_snat_status` block supports
*/
  public workloadAltsConfig?: container_ClusterWorkloadAltsConfig;

  /*
The IP address range of the Kubernetes pods
in this cluster in CIDR notation (e.g. `10.96.0.0/14`). Leave blank to have one
automatically chosen or specify a `/14` block in `10.0.0.0/8`. This field will
default a new cluster to routes-based, where `ip_allocation_policy` is not defined.
*/
  public clusterIpv4Cidr?: string;

  /*
Configuration options for the Binary
Authorization feature. Structure is documented below.
*/
  public binaryAuthorization?: container_ClusterBinaryAuthorization;

  /*
The desired
configuration options for master authorized networks. Omit the
nested `cidr_blocks` attribute to disallow external access (except
the cluster node IPs, which GKE automatically whitelists).
Structure is documented below.
*/
  public masterAuthorizedNetworksConfig?: container_ClusterMasterAuthorizedNetworksConfig;

  // Structure is documented below.
  public meshCertificates?: container_ClusterMeshCertificates;

  /*
Configuration options for the
[NetworkPolicy](https://kubernetes.io/docs/concepts/services-networking/networkpolicies/)
feature. Structure is documented below.
*/
  public networkPolicy?: container_ClusterNetworkPolicy;

  // Configuration for the [cluster upgrade notifications](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-upgrade-notifications) feature. Structure is documented below.
  public notificationConfig?: container_ClusterNotificationConfig;

  /*
Configuration options for the [Release channel](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
feature, which provide more control over automatic upgrades of your GKE clusters.
When updating this field, GKE imposes specific version requirements. See
[Selecting a new release channel](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels#selecting_a_new_release_channel)
for more details; the `gcp.container.getEngineVersions` datasource can provide
the default version for a channel. Note that removing the `release_channel`
field from your config will cause the provider to stop managing your cluster's
release channel, but will not unenroll it. Instead, use the `"UNSPECIFIED"`
channel. Structure is documented below.
*/
  public releaseChannel?: container_ClusterReleaseChannel;

  // Structure is documented below.
  public serviceExternalIpsConfig?: container_ClusterServiceExternalIpsConfig;

  /*
The configuration for addons supported by GKE.
Structure is documented below.
*/
  public addonsConfig?: container_ClusterAddonsConfig;

  /*
Monitoring configuration for the cluster.
Structure is documented below.
*/
  public monitoringConfig?: container_ClusterMonitoringConfig;

  /*
Workload Identity allows Kubernetes service accounts to act as a user-managed
[Google IAM Service Account](https://cloud.google.com/iam/docs/service-accounts#user-managed_service_accounts).
Structure is documented below.
*/
  public workloadIdentityConfig?: container_ClusterWorkloadIdentityConfig;

  /*
The location (region or zone) in which the cluster
master will be created, as well as the default node location. If you specify a
zone (such as `us-central1-a`), the cluster will be a zonal cluster with a
single cluster master. If you specify a region (such as `us-west1`), the
cluster will be a regional cluster with multiple masters spread across zones in
the region, and with default node locations in those zones as well
*/
  public location?: string;

  // Configuration for [Confidential Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes) feature. Structure is documented below documented below.
  public confidentialNodes?: container_ClusterConfidentialNodes;

  // Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
  public enableIntranodeVisibility?: boolean;

  /*
The number of nodes to create in this
cluster's default node pool. In regional or multi-zonal clusters, this is the
number of nodes per zone. Must be set if `node_pool` is not set. If you're using
`gcp.container.NodePool` objects with no default node pool, you'll need to
set this to a value of at least `1`, alongside setting
`remove_default_node_pool` to `true`.
*/
  public initialNodeCount?: number;

  /*
The IP address range of the Kubernetes services in this
cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last
`/16` from the container CIDR.
*/
  public servicesIpv4Cidr?: string;

  /*
Enable NET_ADMIN for the cluster. Defaults to
`false`. This field should only be enabled for Autopilot clusters (`enable_autopilot`
set to `true`).
*/
  public allowNetAdmin?: boolean;

  /*
The default maximum number of pods
per node in this cluster. This doesn't work on "routes-based" clusters, clusters
that don't have IP Aliasing enabled. See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)
for more information.
*/
  public defaultMaxPodsPerNode?: number;

  /*
Enable Autopilot for this cluster. Defaults to `false`.
Note that when this option is enabled, certain features of Standard GKE are not available.
See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview#comparison)
for available features.
*/
  public enableAutopilot?: boolean;

  // The IP address of this cluster's Kubernetes master.
  public endpoint?: string;

  /*
The authentication information for accessing the
Kubernetes master. Some values in this block are only returned by the API if
your service account has permission to get credentials for your GKE cluster. If
you see an unexpected diff unsetting your client cert, ensure you have the
`container.clusters.getCredentials` permission.
Structure is documented below.
*/
  public masterAuth?: container_ClusterMasterAuth;

  // The desired datapath provider for this cluster. This is set to `LEGACY_DATAPATH` by default, which uses the IPTables-based kube-proxy implementation. Set to `ADVANCED_DATAPATH` to enable Dataplane v2.
  public datapathProvider?: string;

  /*
Configuration for Kubernetes Beta APIs.
Structure is documented below.
*/
  public enableK8sBetaApis?: container_ClusterEnableK8sBetaApis;

  /*
The list of zones in which the cluster's nodes
are located. Nodes must be in the region of their regional cluster or in the
same region as their cluster's zone for zonal clusters. If this is specified for
a zonal cluster, omit the cluster's zone.

> A "multi-zonal" cluster is a zonal cluster with at least one additional zone
defined; in a multi-zonal cluster, the cluster master is only present in a
single zone while nodes are present in each of the primary zone and the node
locations. In contrast, in a regional cluster, cluster master nodes are present
in multiple zones in the region. For that reason, regional clusters should be
preferred.
*/
  public nodeLocations?: Array<string>;

  // Enable/Disable Protect API features for the cluster. Structure is documented below.
  public protectConfig?: container_ClusterProtectConfig;

  /*
The name or self_link of the Google Compute Engine
subnetwork in which the cluster's instances are launched.
*/
  public subnetwork?: string;

  // Whether FQDN Network Policy is enabled on this cluster. Users who enable this feature for existing Standard clusters must restart the GKE Dataplane V2 `anetd` DaemonSet after enabling it. See the [Enable FQDN Network Policy in an existing cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/fqdn-network-policies#enable_fqdn_network_policy_in_an_existing_cluster) for more information.
  public enableFqdnNetworkPolicy?: boolean;

  /*
The logging service that the cluster should
write logs to. Available options include `logging.googleapis.com`(Legacy Stackdriver),
`logging.googleapis.com/kubernetes`(Stackdriver Kubernetes Engine Logging), and `none`. Defaults to `logging.googleapis.com/kubernetes`
*/
  public loggingService?: string;

  /*
The current version of the master in the cluster. This may
be different than the `min_master_version` set in the config if the master
has been updated by GKE.
*/
  public masterVersion?: string;

  /*
Configuration for the
[PodSecurityPolicy](https://cloud.google.com/kubernetes-engine/docs/how-to/pod-security-policies) feature.
Structure is documented below.
*/
  public podSecurityPolicyConfig?: container_ClusterPodSecurityPolicyConfig;

  /*
Configuration for the
[ResourceUsageExportConfig](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-usage-metering) feature.
Structure is documented below.
*/
  public resourceUsageExportConfig?: container_ClusterResourceUsageExportConfig;

  /*
Whether to enable Kubernetes Alpha features for
this cluster. Note that when this option is enabled, the cluster cannot be upgraded
and will be automatically deleted after 30 days.
*/
  public enableKubernetesAlpha?: boolean;

  // Description of the cluster.
  public description?: string;

  // . Structure is documented below.
  public identityServiceConfig?: container_ClusterIdentityServiceConfig;

  // Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. Structure is documented below.
  public nodePoolDefaults?: container_ClusterNodePoolDefaults;

  // TPU configuration for the cluster.
  public tpuConfig?: container_ClusterTpuConfig;

  /*
Configuration for the
[Cost Allocation](https://cloud.google.com/kubernetes-engine/docs/how-to/cost-allocations) feature.
Structure is documented below.
*/
  public costManagementConfig?: container_ClusterCostManagementConfig;

  /*
Vertical Pod Autoscaling automatically adjusts the resources of pods controlled by it.
Structure is documented below.
*/
  public verticalPodAutoscaling?: container_ClusterVerticalPodAutoscaling;

  /*
Logging configuration for the cluster.
Structure is documented below.
*/
  public loggingConfig?: container_ClusterLoggingConfig;

  // Fleet configuration for the cluster. Structure is documented below.
  public fleet?: container_ClusterFleet;

  // Enable/Disable Security Posture API features for the cluster. Structure is documented below.
  public securityPostureConfig?: container_ClusterSecurityPostureConfig;

  /*
Whether the ABAC authorizer is enabled for this cluster.
When enabled, identities in the system, including service accounts, nodes, and controllers,
will have statically granted permissions beyond those provided by the RBAC configuration or IAM.
Defaults to `false`
*/
  public enableLegacyAbac?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "authenticatorGroupsConfig",
        "Configuration for the\n[Google Groups for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control#groups-setup-gsuite) feature.\nStructure is documented below.",
        container_ClusterAuthenticatorGroupsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "enableK8sBetaApis",
        "Configuration for Kubernetes Beta APIs.\nStructure is documented below.",
        container_ClusterEnableK8sBetaApis_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tpuConfig",
        "TPU configuration for the cluster.",
        container_ClusterTpuConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkPolicy",
        "Configuration options for the\n[NetworkPolicy](https://kubernetes.io/docs/concepts/services-networking/networkpolicies/)\nfeature. Structure is documented below.",
        container_ClusterNetworkPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "privateClusterConfig",
        "Configuration for [private clusters](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters),\nclusters with private nodes. Structure is documented below.",
        container_ClusterPrivateClusterConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "removeDefaultNodePool",
        "If `true`, deletes the default node\npool upon cluster creation. If you're using `gcp.container.NodePool`\nresources with no default node pool, this should be set to `true`, alongside\nsetting `initial_node_count` to at least `1`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "clusterTelemetry",
        "Configuration for\n[ClusterTelemetry](https://cloud.google.com/monitoring/kubernetes-engine/installing#controlling_the_collection_of_application_logs) feature,\nStructure is documented below.",
        container_ClusterClusterTelemetry_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ipAllocationPolicy",
        "Configuration of cluster IP allocation for\nVPC-native clusters. If this block is unset during creation, it will be set by the GKE backend.\nStructure is documented below.",
        container_ClusterIpAllocationPolicy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableLegacyAbac",
        "Whether the ABAC authorizer is enabled for this cluster.\nWhen enabled, identities in the system, including service accounts, nodes, and controllers,\nwill have statically granted permissions beyond those provided by the RBAC configuration or IAM.\nDefaults to `false`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodePoolDefaults",
        "Default NodePool settings for the entire cluster. These settings are overridden if specified on the specific NodePool object. Structure is documented below.",
        container_ClusterNodePoolDefaults_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loggingConfig",
        "Logging configuration for the cluster.\nStructure is documented below.",
        container_ClusterLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "releaseChannel",
        'Configuration options for the [Release channel](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels)\nfeature, which provide more control over automatic upgrades of your GKE clusters.\nWhen updating this field, GKE imposes specific version requirements. See\n[Selecting a new release channel](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels#selecting_a_new_release_channel)\nfor more details; the `gcp.container.getEngineVersions` datasource can provide\nthe default version for a channel. Note that removing the `release_channel`\nfield from your config will cause the provider to stop managing your cluster\'s\nrelease channel, but will not unenroll it. Instead, use the `"UNSPECIFIED"`\nchannel. Structure is documented below.',
        container_ClusterReleaseChannel_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableAutopilot",
        "Enable Autopilot for this cluster. Defaults to `false`.\nNote that when this option is enabled, certain features of Standard GKE are not available.\nSee the [official documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview#comparison)\nfor available features.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableIntranodeVisibility",
        "Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodePoolAutoConfig",
        "Node pool configs that apply to auto-provisioned node pools in\n[autopilot](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview#comparison) clusters and\n[node auto-provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)-enabled clusters. Structure is documented below.",
        container_ClusterNodePoolAutoConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "workloadIdentityConfig",
        "Workload Identity allows Kubernetes service accounts to act as a user-managed\n[Google IAM Service Account](https://cloud.google.com/iam/docs/service-accounts#user-managed_service_accounts).\nStructure is documented below.",
        container_ClusterWorkloadIdentityConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "clusterAutoscaling",
        "Per-cluster configuration of Node Auto-Provisioning with Cluster Autoscaler to\nautomatically adjust the size of the cluster and create/delete node pools based\non the current needs of the cluster's workload. See the\n[guide to using Node Auto-Provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)\nfor more details. Structure is documented below.",
        container_ClusterClusterAutoscaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "identityServiceConfig",
        ". Structure is documented below.",
        container_ClusterIdentityServiceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "monitoringService",
        "The monitoring service that the cluster\nshould write metrics to.\nAutomatically send metrics from pods in the cluster to the Google Cloud Monitoring API.\nVM metrics will be collected by Google Compute Engine regardless of this setting\nAvailable options include\n`monitoring.googleapis.com`(Legacy Stackdriver), `monitoring.googleapis.com/kubernetes`(Stackdriver Kubernetes Engine Monitoring), and `none`.\nDefaults to `monitoring.googleapis.com/kubernetes`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "monitoringConfig",
        "Monitoring configuration for the cluster.\nStructure is documented below.",
        container_ClusterMonitoringConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodeConfig",
        "Parameters used in creating the default node pool.\nGenerally, this field should not be used at the same time as a\n`gcp.container.NodePool` or a `node_pool` block; this configuration\nmanages the default node pool, which isn't recommended to be used.\nStructure is documented below.",
        container_ClusterNodeConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "nodeLocations",
        "The list of zones in which the cluster's nodes\nare located. Nodes must be in the region of their regional cluster or in the\nsame region as their cluster's zone for zonal clusters. If this is specified for\na zonal cluster, omit the cluster's zone.\n\n> A \"multi-zonal\" cluster is a zonal cluster with at least one additional zone\ndefined; in a multi-zonal cluster, the cluster master is only present in a\nsingle zone while nodes are present in each of the primary zone and the node\nlocations. In contrast, in a regional cluster, cluster master nodes are present\nin multiple zones in the region. For that reason, regional clusters should be\npreferred.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "workloadAltsConfig",
        'Configuration for [direct-path (via ALTS) with workload identity.](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#workloadaltsconfig). Structure is documented below.\n\n<a name="nested_default_snat_status"></a>The `default_snat_status` block supports',
        container_ClusterWorkloadAltsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "privateIpv6GoogleAccess",
        "The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "masterAuth",
        "The authentication information for accessing the\nKubernetes master. Some values in this block are only returned by the API if\nyour service account has permission to get credentials for your GKE cluster. If\nyou see an unexpected diff unsetting your client cert, ensure you have the\n`container.clusters.getCredentials` permission.\nStructure is documented below.",
        container_ClusterMasterAuth_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableMultiNetworking",
        "Whether multi-networking is enabled for this cluster.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "confidentialNodes",
        "Configuration for [Confidential Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes) feature. Structure is documented below documented below.",
        container_ClusterConfidentialNodes_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkingMode",
        "Determines whether alias IPs or routes will be used for pod IPs in the cluster.\nOptions are `VPC_NATIVE` or `ROUTES`. `VPC_NATIVE` enables [IP aliasing](https://cloud.google.com/kubernetes-engine/docs/how-to/ip-aliases). Newly created clusters will default to `VPC_NATIVE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "minMasterVersion",
        "The minimum version of the master. GKE\nwill auto-update the master to new versions, so this does not guarantee the\ncurrent master version--use the read-only `master_version` field to obtain that.\nIf unset, the cluster's version will be set by GKE to the version of the most recent\nofficial release (which is not necessarily the latest version).  Most users will find\nthe `gcp.container.getEngineVersions` data source useful - it indicates which versions\nare available. If you intend to specify versions manually,\n[the docs](https://cloud.google.com/kubernetes-engine/versioning-and-upgrades#specifying_cluster_version)\ndescribe the various acceptable formats for this field.\n\n> If you are using the `gcp.container.getEngineVersions` datasource with a regional cluster, ensure that you have provided a `location`\nto the datasource. A region can have a different set of supported versions than its corresponding zones, and not all zones in a\nregion are guaranteed to support the same version.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the cluster.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "Whether or not to allow Terraform to destroy the instance. Defaults to true. Unless this field is set to false in\nTerraform state, a terraform destroy or terraform apply that would delete the cluster will fail.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "protectConfig",
        "Enable/Disable Protect API features for the cluster. Structure is documented below.",
        container_ClusterProtectConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loggingService",
        "The logging service that the cluster should\nwrite logs to. Available options include `logging.googleapis.com`(Legacy Stackdriver),\n`logging.googleapis.com/kubernetes`(Stackdriver Kubernetes Engine Logging), and `none`. Defaults to `logging.googleapis.com/kubernetes`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceExternalIpsConfig",
        "Structure is documented below.",
        container_ClusterServiceExternalIpsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "defaultSnatStatus",
        "[GKE SNAT](https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent#how_ipmasq_works) DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster, [API doc](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#networkconfig). Structure is documented below",
        container_ClusterDefaultSnatStatus_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "meshCertificates",
        "Structure is documented below.",
        container_ClusterMeshCertificates_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "nodePools",
        'List of node pools associated with this cluster.\nSee gcp.container.NodePool for schema.\n**Warning:** node pools defined inside a cluster can\'t be changed (or added/removed) after\ncluster creation without deleting and recreating the entire cluster. Unless you absolutely need the ability\nto say "these are the _only_ node pools associated with this cluster", use the\ngcp.container.NodePool resource instead of this property.',
        container_ClusterNodePool_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dnsConfig",
        "Configuration for [Using Cloud DNS for GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/cloud-dns). Structure is documented below.",
        container_ClusterDnsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "resourceUsageExportConfig",
        "Configuration for the\n[ResourceUsageExportConfig](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-usage-metering) feature.\nStructure is documented below.",
        container_ClusterResourceUsageExportConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowNetAdmin",
        "Enable NET_ADMIN for the cluster. Defaults to\n`false`. This field should only be enabled for Autopilot clusters (`enable_autopilot`\nset to `true`).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "initialNodeCount",
        "The number of nodes to create in this\ncluster's default node pool. In regional or multi-zonal clusters, this is the\nnumber of nodes per zone. Must be set if `node_pool` is not set. If you're using\n`gcp.container.NodePool` objects with no default node pool, you'll need to\nset this to a value of at least `1`, alongside setting\n`remove_default_node_pool` to `true`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "datapathProvider",
        "The desired datapath provider for this cluster. This is set to `LEGACY_DATAPATH` by default, which uses the IPTables-based kube-proxy implementation. Set to `ADVANCED_DATAPATH` to enable Dataplane v2.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetwork",
        "The name or self_link of the Google Compute Engine\nsubnetwork in which the cluster's instances are launched.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "maintenancePolicy",
        "The maintenance policy to use for the cluster. Structure is\ndocumented below.",
        container_ClusterMaintenancePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "masterAuthorizedNetworksConfig",
        "The desired\nconfiguration options for master authorized networks. Omit the\nnested `cidr_blocks` attribute to disallow external access (except\nthe cluster node IPs, which GKE automatically whitelists).\nStructure is documented below.",
        container_ClusterMasterAuthorizedNetworksConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "gatewayApiConfig",
        "Configuration for [GKE Gateway API controller](https://cloud.google.com/kubernetes-engine/docs/concepts/gateway-api). Structure is documented below.",
        container_ClusterGatewayApiConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "defaultMaxPodsPerNode",
        "The default maximum number of pods\nper node in this cluster. This doesn't work on \"routes-based\" clusters, clusters\nthat don't have IP Aliasing enabled. See the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)\nfor more information.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "notificationConfig",
        "Configuration for the [cluster upgrade notifications](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-upgrade-notifications) feature. Structure is documented below.",
        container_ClusterNotificationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "podSecurityPolicyConfig",
        "Configuration for the\n[PodSecurityPolicy](https://cloud.google.com/kubernetes-engine/docs/how-to/pod-security-policies) feature.\nStructure is documented below.",
        container_ClusterPodSecurityPolicyConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "securityPostureConfig",
        "Enable/Disable Security Posture API features for the cluster. Structure is documented below.",
        container_ClusterSecurityPostureConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableL4IlbSubsetting",
        "Whether L4ILB Subsetting is enabled for this cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableTpu",
        "Whether to enable Cloud TPU resources in this cluster.\nSee the [official documentation](https://cloud.google.com/tpu/docs/kubernetes-engine-setup).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "resourceLabels",
        "The GCE resource labels (a map of key/value pairs) to be applied to the cluster.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "fleet",
        "Fleet configuration for the cluster. Structure is documented below.",
        container_ClusterFleet_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "nodeVersion",
        "The Kubernetes version on the nodes. Must either be unset\nor set to the same value as `min_master_version` on create. Defaults to the default\nversion set by GKE which is not necessarily the latest version. This only affects\nnodes in the default node pool. While a fuzzy version can be specified, it's\nrecommended that you specify explicit versions as the provider will see spurious diffs\nwhen fuzzy versions are used. See the `gcp.container.getEngineVersions` data source's\n`version_prefix` field to approximate fuzzy versions.\nTo update nodes in other node pools, use the `version` attribute on the node pool.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "databaseEncryption",
        "Structure is documented below.",
        container_ClusterDatabaseEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "costManagementConfig",
        "Configuration for the\n[Cost Allocation](https://cloud.google.com/kubernetes-engine/docs/how-to/cost-allocations) feature.\nStructure is documented below.",
        container_ClusterCostManagementConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableKubernetesAlpha",
        "Whether to enable Kubernetes Alpha features for\nthis cluster. Note that when this option is enabled, the cluster cannot be upgraded\nand will be automatically deleted after 30 days.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableShieldedNodes",
        "Enable Shielded Nodes features on all nodes in this cluster.  Defaults to `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "binaryAuthorization",
        "Configuration options for the Binary\nAuthorization feature. Structure is documented below.",
        container_ClusterBinaryAuthorization_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "addonsConfig",
        "The configuration for addons supported by GKE.\nStructure is documented below.",
        container_ClusterAddonsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableFqdnNetworkPolicy",
        "Whether FQDN Network Policy is enabled on this cluster. Users who enable this feature for existing Standard clusters must restart the GKE Dataplane V2 `anetd` DaemonSet after enabling it. See the [Enable FQDN Network Policy in an existing cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/fqdn-network-policies#enable_fqdn_network_policy_in_an_existing_cluster) for more information.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "The name or self_link of the Google Compute Engine\nnetwork to which the cluster is connected. For Shared VPC, set this to the self link of the\nshared network.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "verticalPodAutoscaling",
        "Vertical Pod Autoscaling automatically adjusts the resources of pods controlled by it.\nStructure is documented below.",
        container_ClusterVerticalPodAutoscaling_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location (region or zone) in which the cluster\nmaster will be created, as well as the default node location. If you specify a\nzone (such as `us-central1-a`), the cluster will be a zonal cluster with a\nsingle cluster master. If you specify a region (such as `us-west1`), the\ncluster will be a regional cluster with multiple masters spread across zones in\nthe region, and with default node locations in those zones as well",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the cluster, unique within the project and\nlocation.\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIpv4Cidr",
        "The IP address range of the Kubernetes pods\nin this cluster in CIDR notation (e.g. `10.96.0.0/14`). Leave blank to have one\nautomatically chosen or specify a `/14` block in `10.0.0.0/8`. This field will\ndefault a new cluster to routes-based, where `ip_allocation_policy` is not defined.",
        [],
        false,
        true,
      ),
    ];
  }
}
