import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity,
  Dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity_GetTypes,
} from "./Dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity";
import {
  Dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig,
  Dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig";
import {
  Dataproc_ClusterClusterConfigGceClusterConfigNodeGroupAffinity,
  Dataproc_ClusterClusterConfigGceClusterConfigNodeGroupAffinity_GetTypes,
} from "./Dataproc_ClusterClusterConfigGceClusterConfigNodeGroupAffinity";

export interface Dataproc_ClusterClusterConfigGceClusterConfig {
  // Node Group Affinity for sole-tenant clusters.
  NodeGroupAffinity?: Dataproc_ClusterClusterConfigGceClusterConfigNodeGroupAffinity;

  // Reservation Affinity for consuming zonal reservation.
  ReservationAffinity?: Dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity;

  /*
The service account to be used by the Node VMs.
If not specified, the "default" service account is used.
*/
  ServiceAccount?: string;

  /*
The set of Google API scopes
to be made available on all of the node VMs under the `service_account`
specified. Both OAuth2 URLs and gcloud
short names are supported. To allow full access to all Cloud APIs, use the
`cloud-platform` scope. See a complete list of scopes [here](https://cloud.google.com/sdk/gcloud/reference/alpha/compute/instances/set-scopes#--scopes).
*/
  ServiceAccountScopes?: Array<string>;

  /*
Shielded Instance Config for clusters using [Compute Engine Shielded VMs](https://cloud.google.com/security/shielded-cloud/shielded-vm).

- - -
*/
  ShieldedInstanceConfig?: Dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig;

  /*
By default, clusters are not restricted to internal IP addresses,
and will have ephemeral external IP addresses assigned to each instance. If set to true, all
instances in the cluster will only have internal IP addresses. Note: Private Google Access
(also known as `privateIpGoogleAccess`) must be enabled on the subnetwork that the cluster
will be launched in.
*/
  InternalIpOnly?: boolean;

  /*
A map of the Compute Engine metadata entries to add to all instances
(see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
*/
  Metadata?: Map<string, string>;

  /*
The name or self_link of the Google Compute Engine
network to the cluster will be part of. Conflicts with `subnetwork`.
If neither is specified, this defaults to the "default" network.
*/
  Network?: string;

  /*
The name or self_link of the Google Compute Engine
subnetwork the cluster will be part of. Conflicts with `network`.
*/
  Subnetwork?: string;

  /*
The list of instance tags applied to instances in the cluster.
Tags are used to identify valid sources or targets for network firewalls.
*/
  Tags?: Array<string>;

  /*
The GCP zone where your data is stored and used (i.e. where
the master and the worker nodes will be created in). If `region` is set to 'global' (default)
then `zone` is mandatory, otherwise GCP is able to make use of [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/auto-zone)
to determine this automatically for you.
Note: This setting additionally determines and restricts
which computing resources are available for use with other configs such as
`cluster_config.master_config.machine_type` and `cluster_config.worker_config.machine_type`.
*/
  Zone?: string;
}

export function Dataproc_ClusterClusterConfigGceClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "InternalIpOnly",
      "By default, clusters are not restricted to internal IP addresses,\nand will have ephemeral external IP addresses assigned to each instance. If set to true, all\ninstances in the cluster will only have internal IP addresses. Note: Private Google Access\n(also known as `privateIpGoogleAccess`) must be enabled on the subnetwork that the cluster\nwill be launched in.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Metadata",
      "A map of the Compute Engine metadata entries to add to all instances\n(see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Network",
      'The name or self_link of the Google Compute Engine\nnetwork to the cluster will be part of. Conflicts with `subnetwork`.\nIf neither is specified, this defaults to the "default" network.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      'The service account to be used by the Node VMs.\nIf not specified, the "default" service account is used.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ServiceAccountScopes",
      "The set of Google API scopes\nto be made available on all of the node VMs under the `service_account`\nspecified. Both OAuth2 URLs and gcloud\nshort names are supported. To allow full access to all Cloud APIs, use the\n`cloud-platform` scope. See a complete list of scopes [here](https://cloud.google.com/sdk/gcloud/reference/alpha/compute/instances/set-scopes#--scopes).",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ShieldedInstanceConfig",
      "Shielded Instance Config for clusters using [Compute Engine Shielded VMs](https://cloud.google.com/security/shielded-cloud/shielded-vm).\n\n- - -",
      Dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Subnetwork",
      "The name or self_link of the Google Compute Engine\nsubnetwork the cluster will be part of. Conflicts with `network`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "The list of instance tags applied to instances in the cluster.\nTags are used to identify valid sources or targets for network firewalls.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Zone",
      "The GCP zone where your data is stored and used (i.e. where\nthe master and the worker nodes will be created in). If `region` is set to 'global' (default)\nthen `zone` is mandatory, otherwise GCP is able to make use of [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/auto-zone)\nto determine this automatically for you.\nNote: This setting additionally determines and restricts\nwhich computing resources are available for use with other configs such as\n`cluster_config.master_config.machine_type` and `cluster_config.worker_config.machine_type`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NodeGroupAffinity",
      "Node Group Affinity for sole-tenant clusters.",
      Dataproc_ClusterClusterConfigGceClusterConfigNodeGroupAffinity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ReservationAffinity",
      "Reservation Affinity for consuming zonal reservation.",
      Dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity_GetTypes(),
      false,
      false,
    ),
  ];
}
