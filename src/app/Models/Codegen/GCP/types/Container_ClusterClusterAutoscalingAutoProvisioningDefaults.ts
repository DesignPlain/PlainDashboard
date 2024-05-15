import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings,
  Container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings_GetTypes,
} from "./Container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings";
import {
  Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement,
  Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement_GetTypes,
} from "./Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement";
import {
  Container_ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig,
  Container_ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig_GetTypes,
} from "./Container_ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig";

export interface Container_ClusterClusterAutoscalingAutoProvisioningDefaults {
  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. Defaults to `100`
  DiskSize?: number;

  // Specifies the upgrade settings for NAP created node pools. Structure is documented below.
  UpgradeSettings?: Container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings;

  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption
  BootDiskKmsKey?: string;

  // The default image type used by NAP once a new node pool is being created. Please note that according to the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning#default-image-type) the value must be one of the [COS_CONTAINERD, COS, UBUNTU_CONTAINERD, UBUNTU]. __NOTE__ : COS AND UBUNTU are deprecated as of `GKE 1.24`
  ImageType?: string;

  // NodeManagement configuration for this NodePool. Structure is documented below.
  Management?: Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement;

  /*
Minimum CPU platform to be used for NAP created node pools. The instance may be scheduled on the
specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such
as "Intel Haswell" or "Intel Sandy Bridge".
*/
  MinCpuPlatform?: string;

  /*
Scopes that are used by NAP and GKE Autopilot when creating node pools. Use the "https://www.googleapis.com/auth/cloud-platform" scope to grant access to all APIs. It is recommended that you set `service_account` to a non-default service account and grant IAM roles to that service account for only the resources that it needs.

> `monitoring.write` is always enabled regardless of user input.  `monitoring` and `logging.write` may also be enabled depending on the values for `monitoring_service` and `logging_service`.
*/
  OauthScopes?: Array<string>;

  // The Google Cloud Platform Service Account to be used by the node VMs created by GKE Autopilot or NAP.
  ServiceAccount?: string;

  // Shielded Instance options. Structure is documented below.
  ShieldedInstanceConfig?: Container_ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig;

  // Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced'). Defaults to `pd-standard`
  DiskType?: string;
}

export function Container_ClusterClusterAutoscalingAutoProvisioningDefaults_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "DiskSize",
      "Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. Defaults to `100`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UpgradeSettings",
      "Specifies the upgrade settings for NAP created node pools. Structure is documented below.",
      Container_ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "BootDiskKmsKey",
      "The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ImageType",
      "The default image type used by NAP once a new node pool is being created. Please note that according to the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning#default-image-type) the value must be one of the [COS_CONTAINERD, COS, UBUNTU_CONTAINERD, UBUNTU]. __NOTE__ : COS AND UBUNTU are deprecated as of `GKE 1.24`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Management",
      "NodeManagement configuration for this NodePool. Structure is documented below.",
      Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinCpuPlatform",
      'Minimum CPU platform to be used for NAP created node pools. The instance may be scheduled on the\nspecified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such\nas "Intel Haswell" or "Intel Sandy Bridge".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DiskType",
      "Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced'). Defaults to `pd-standard`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "OauthScopes",
      'Scopes that are used by NAP and GKE Autopilot when creating node pools. Use the "https://www.googleapis.com/auth/cloud-platform" scope to grant access to all APIs. It is recommended that you set `service_account` to a non-default service account and grant IAM roles to that service account for only the resources that it needs.\n\n> `monitoring.write` is always enabled regardless of user input.  `monitoring` and `logging.write` may also be enabled depending on the values for `monitoring_service` and `logging_service`.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      "The Google Cloud Platform Service Account to be used by the node VMs created by GKE Autopilot or NAP.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ShieldedInstanceConfig",
      "Shielded Instance options. Structure is documented below.",
      Container_ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
