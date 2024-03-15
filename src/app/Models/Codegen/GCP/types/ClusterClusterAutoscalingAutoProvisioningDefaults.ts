import { ClusterClusterAutoscalingAutoProvisioningDefaultsManagement } from "./ClusterClusterAutoscalingAutoProvisioningDefaultsManagement";
import { ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings } from "./ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings";
import { ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig } from "./ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig";

export interface ClusterClusterAutoscalingAutoProvisioningDefaults {
  // The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption
  BootDiskKmsKey?: string;

  // NodeManagement configuration for this NodePool. Structure is documented below.
  Management?: ClusterClusterAutoscalingAutoProvisioningDefaultsManagement;

  /*
Minimum CPU platform to be used for NAP created node pools. The instance may be scheduled on the
specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such
as "Intel Haswell" or "Intel Sandy Bridge".
*/
  MinCpuPlatform?: string;

  // Specifies the upgrade settings for NAP created node pools. Structure is documented below.
  UpgradeSettings?: ClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings;

  // The Google Cloud Platform Service Account to be used by the node VMs created by GKE Autopilot or NAP.
  ServiceAccount?: string;

  // Shielded Instance options. Structure is documented below.
  ShieldedInstanceConfig?: ClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig;

  // Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. Defaults to `100`
  DiskSize?: number;

  // Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced'). Defaults to `pd-standard`
  DiskType?: string;

  // The default image type used by NAP once a new node pool is being created. Please note that according to the [official documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning#default-image-type) the value must be one of the [COS_CONTAINERD, COS, UBUNTU_CONTAINERD, UBUNTU]. __NOTE__ : COS AND UBUNTU are deprecated as of `GKE 1.24`
  ImageType?: string;

  /*
Scopes that are used by NAP and GKE Autopilot when creating node pools. Use the "https://www.googleapis.com/auth/cloud-platform" scope to grant access to all APIs. It is recommended that you set `service_account` to a non-default service account and grant IAM roles to that service account for only the resources that it needs.

> `monitoring.write` is always enabled regardless of user input.  `monitoring` and `logging.write` may also be enabled depending on the values for `monitoring_service` and `logging_service`.
*/
  OauthScopes?: Array<string>;
}
