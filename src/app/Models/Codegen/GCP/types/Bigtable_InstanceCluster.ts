import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigtable_InstanceClusterAutoscalingConfig,
  Bigtable_InstanceClusterAutoscalingConfig_GetTypes,
} from "./Bigtable_InstanceClusterAutoscalingConfig";

export interface Bigtable_InstanceCluster {
  // The ID of the Cloud Bigtable cluster. Must be 6-30 characters and must only contain hyphens, lowercase letters and numbers.
  ClusterId?: string;

  /*
Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster. The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains this cluster must be granted the `cloudkms.cryptoKeyEncrypterDecrypter` role on the CMEK key. 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster.

> --Note--: Removing the field entirely from the config will cause the provider to default to the backend value.

!> --Warning--: Modifying this field will cause the provider to delete/recreate the entire resource.

!> --Warning:-- Modifying the `storage_type`, `zone` or `kms_key_name` of an existing cluster (by
`cluster_id`) will cause the provider to delete/recreate the entire
`gcp.bigtable.Instance` resource. If these values are changing, use a new
`cluster_id`.
*/
  KmsKeyName?: string;

  /*
The number of nodes in the cluster.
If no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50%!!(MISSING)s(MISSING)torage utilization.
*/
  NumNodes?: number;

  // The state of the cluster
  State?: string;

  /*
The storage type to use. One of `"SSD"` or
`"HDD"`. Defaults to `"SSD"`.
*/
  StorageType?: string;

  /*
The zone to create the Cloud Bigtable cluster in. If it not
specified, the provider zone is used. Each cluster must have a different zone in the same region. Zones that support
Bigtable instances are noted on the [Cloud Bigtable locations page](https://cloud.google.com/bigtable/docs/locations).
*/
  Zone?: string;

  // [Autoscaling](https://cloud.google.com/bigtable/docs/autoscaling#parameters) config for the cluster, contains the following arguments:
  AutoscalingConfig?: Bigtable_InstanceClusterAutoscalingConfig;
}

export function Bigtable_InstanceCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClusterId",
      "The ID of the Cloud Bigtable cluster. Must be 6-30 characters and must only contain hyphens, lowercase letters and numbers.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeyName",
      "Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster. The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains this cluster must be granted the `cloudkms.cryptoKeyEncrypterDecrypter` role on the CMEK key. 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster.\n\n> **Note**: Removing the field entirely from the config will cause the provider to default to the backend value.\n\n!> **Warning**: Modifying this field will cause the provider to delete/recreate the entire resource.\n\n!> **Warning:** Modifying the `storage_type`, `zone` or `kms_key_name` of an existing cluster (by\n`cluster_id`) will cause the provider to delete/recreate the entire\n`gcp.bigtable.Instance` resource. If these values are changing, use a new\n`cluster_id`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NumNodes",
      "The number of nodes in the cluster.\nIf no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50%!s(MISSING)torage utilization.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "The state of the cluster",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StorageType",
      'The storage type to use. One of `"SSD"` or\n`"HDD"`. Defaults to `"SSD"`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Zone",
      "The zone to create the Cloud Bigtable cluster in. If it not\nspecified, the provider zone is used. Each cluster must have a different zone in the same region. Zones that support\nBigtable instances are noted on the [Cloud Bigtable locations page](https://cloud.google.com/bigtable/docs/locations).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AutoscalingConfig",
      "[Autoscaling](https://cloud.google.com/bigtable/docs/autoscaling#parameters) config for the cluster, contains the following arguments:",
      Bigtable_InstanceClusterAutoscalingConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
