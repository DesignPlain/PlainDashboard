import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig,
  dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig_GetTypes,
} from "./dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig";
import {
  dataproc_ClusterClusterConfigGceClusterConfigNodeGroupAffinity,
  dataproc_ClusterClusterConfigGceClusterConfigNodeGroupAffinity_GetTypes,
} from "./dataproc_ClusterClusterConfigGceClusterConfigNodeGroupAffinity";
import {
  dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity,
  dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity_GetTypes,
} from "./dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity";

export interface dataproc_ClusterClusterConfigGceClusterConfig {
  /*
The set of Google API scopes
to be made available on all of the node VMs under the `service_account`
specified. Both OAuth2 URLs and gcloud
short names are supported. To allow full access to all Cloud APIs, use the
`cloud-platform` scope. See a complete list of scopes [here](https://cloud.google.com/sdk/gcloud/reference/alpha/compute/instances/set-scopes#--scopes).
*/
  serviceAccountScopes?: Array<string>;

  /*
Shielded Instance Config for clusters using [Compute Engine Shielded VMs](https://cloud.google.com/security/shielded-cloud/shielded-vm).

- - -
*/
  shieldedInstanceConfig?: dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig;

  /*
The name or self_link of the Google Compute Engine
subnetwork the cluster will be part of. Conflicts with `network`.
*/
  subnetwork?: string;

  /*
The list of instance tags applied to instances in the cluster.
Tags are used to identify valid sources or targets for network firewalls.
*/
  tags?: Array<string>;

  /*
The GCP zone where your data is stored and used (i.e. where
the master and the worker nodes will be created in). If `region` is set to 'global' (default)
then `zone` is mandatory, otherwise GCP is able to make use of [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/auto-zone)
to determine this automatically for you.
Note: This setting additionally determines and restricts
which computing resources are available for use with other configs such as
`cluster_config.master_config.machine_type` and `cluster_config.worker_config.machine_type`.
*/
  zone?: string;

  /*
The service account to be used by the Node VMs.
If not specified, the "default" service account is used.
*/
  serviceAccount?: string;

  /*
By default, clusters are not restricted to internal IP addresses,
and will have ephemeral external IP addresses assigned to each instance. If set to true, all
instances in the cluster will only have internal IP addresses. Note: Private Google Access
(also known as `privateIpGoogleAccess`) must be enabled on the subnetwork that the cluster
will be launched in.
*/
  internalIpOnly?: boolean;

  /*
A map of the Compute Engine metadata entries to add to all instances
(see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
*/
  metadata?: Map<string, string>;

  /*
The name or self_link of the Google Compute Engine
network to the cluster will be part of. Conflicts with `subnetwork`.
If neither is specified, this defaults to the "default" network.
*/
  network?: string;

  // Node Group Affinity for sole-tenant clusters.
  nodeGroupAffinity?: dataproc_ClusterClusterConfigGceClusterConfigNodeGroupAffinity;

  // Reservation Affinity for consuming zonal reservation.
  reservationAffinity?: dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity;
}

export function dataproc_ClusterClusterConfigGceClusterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "serviceAccountScopes",
      "The set of Google API scopes\nto be made available on all of the node VMs under the `service_account`\nspecified. Both OAuth2 URLs and gcloud\nshort names are supported. To allow full access to all Cloud APIs, use the\n`cloud-platform` scope. See a complete list of scopes [here](https://cloud.google.com/sdk/gcloud/reference/alpha/compute/instances/set-scopes#--scopes).",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "shieldedInstanceConfig",
      "Shielded Instance Config for clusters using [Compute Engine Shielded VMs](https://cloud.google.com/security/shielded-cloud/shielded-vm).\n\n- - -",
      dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetwork",
      "The name or self_link of the Google Compute Engine\nsubnetwork the cluster will be part of. Conflicts with `network`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "The list of instance tags applied to instances in the cluster.\nTags are used to identify valid sources or targets for network firewalls.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      'The service account to be used by the Node VMs.\nIf not specified, the "default" service account is used.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nodeGroupAffinity",
      "Node Group Affinity for sole-tenant clusters.",
      dataproc_ClusterClusterConfigGceClusterConfigNodeGroupAffinity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "zone",
      "The GCP zone where your data is stored and used (i.e. where\nthe master and the worker nodes will be created in). If `region` is set to 'global' (default)\nthen `zone` is mandatory, otherwise GCP is able to make use of [Auto Zone Placement](https://cloud.google.com/dataproc/docs/concepts/auto-zone)\nto determine this automatically for you.\nNote: This setting additionally determines and restricts\nwhich computing resources are available for use with other configs such as\n`cluster_config.master_config.machine_type` and `cluster_config.worker_config.machine_type`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "internalIpOnly",
      "By default, clusters are not restricted to internal IP addresses,\nand will have ephemeral external IP addresses assigned to each instance. If set to true, all\ninstances in the cluster will only have internal IP addresses. Note: Private Google Access\n(also known as `privateIpGoogleAccess`) must be enabled on the subnetwork that the cluster\nwill be launched in.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "metadata",
      "A map of the Compute Engine metadata entries to add to all instances\n(see [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      'The name or self_link of the Google Compute Engine\nnetwork to the cluster will be part of. Conflicts with `subnetwork`.\nIf neither is specified, this defaults to the "default" network.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "reservationAffinity",
      "Reservation Affinity for consuming zonal reservation.",
      dataproc_ClusterClusterConfigGceClusterConfigReservationAffinity_GetTypes(),
      false,
      false,
    ),
  ];
}
