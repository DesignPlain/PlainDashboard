import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement,
  container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement_GetTypes,
} from "./container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement";
import {
  container_ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig,
  container_ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig_GetTypes,
} from "./container_ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig";
import {
  container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings,
  container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings_GetTypes,
} from "./container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings";

export interface container_ClusterClusterAutoscalingAutoProvisioningDefaults {
  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. Defaults to `100`
  diskSize?: number;

  // NodeManagement configuration for this NodePool. Structure is documented below.
  management?: container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement;

  /*
Minimum CPU platform to be used for NAP created node pools. The instance may be scheduled on the
specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such
as "Intel Haswell" or "Intel Sandy Bridge".
*/
  minCpuPlatform?: string;

  // The Google Cloud Platform Service Account to be used by the node VMs created by GKE Autopilot or NAP.
  serviceAccount?: string;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption
  bootDiskKmsKey?: string;

  // Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced'). Defaults to `pd-standard`
  diskType?: string;

  // The default image type used by NAP once a new node pool is being created. Please note that according to the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning#default-image-type) the value must be one of the [COS_CONTAINERD, COS, UBUNTU_CONTAINERD, UBUNTU]. __NOTE__ : COS AND UBUNTU are deprecated as of `GKE 1.24`
  imageType?: string;

  /*
Scopes that are used by NAP and GKE Autopilot when creating node pools. Use the "https://www.googleapis.com/auth/cloud-platform" scope to grant access to all APIs. It is recommended that you set `service_account` to a non-default service account and grant IAM roles to that service account for only the resources that it needs.

> `monitoring.write` is always enabled regardless of user input.  `monitoring` and `logging.write` may also be enabled depending on the values for `monitoring_service` and `logging_service`.
*/
  oauthScopes?: Array<string>;

  // Shielded Instance options. Structure is documented below.
  shieldedInstanceConfig?: container_ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig;

  // Specifies the upgrade settings for NAP created node pools. Structure is documented below.
  upgradeSettings?: container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings;
}

export function container_ClusterClusterAutoscalingAutoProvisioningDefaults_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      "The Google Cloud Platform Service Account to be used by the node VMs created by GKE Autopilot or NAP.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bootDiskKmsKey",
      "The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "upgradeSettings",
      "Specifies the upgrade settings for NAP created node pools. Structure is documented below.",
      container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskSize",
      "Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. Defaults to `100`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minCpuPlatform",
      'Minimum CPU platform to be used for NAP created node pools. The instance may be scheduled on the\nspecified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such\nas "Intel Haswell" or "Intel Sandy Bridge".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskType",
      "Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced'). Defaults to `pd-standard`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageType",
      "The default image type used by NAP once a new node pool is being created. Please note that according to the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning#default-image-type) the value must be one of the [COS_CONTAINERD, COS, UBUNTU_CONTAINERD, UBUNTU]. __NOTE__ : COS AND UBUNTU are deprecated as of `GKE 1.24`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "oauthScopes",
      'Scopes that are used by NAP and GKE Autopilot when creating node pools. Use the "https://www.googleapis.com/auth/cloud-platform" scope to grant access to all APIs. It is recommended that you set `service_account` to a non-default service account and grant IAM roles to that service account for only the resources that it needs.\n\n> `monitoring.write` is always enabled regardless of user input.  `monitoring` and `logging.write` may also be enabled depending on the values for `monitoring_service` and `logging_service`.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "shieldedInstanceConfig",
      "Shielded Instance options. Structure is documented below.",
      container_ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "management",
      "NodeManagement configuration for this NodePool. Structure is documented below.",
      container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement_GetTypes(),
      false,
      false,
    ),
  ];
}
