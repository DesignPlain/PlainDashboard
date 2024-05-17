import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureMembershipConfigmanagementConfigSyncOci {
  // The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.
  GcpServiceAccountEmail?: string;

  // The absolute path of the directory that contains the local resources. Default: the root directory of the image.
  PolicyDir?: string;

  // Type of secret configured for access to the OCI Image. Must be one of gcenode, gcpserviceaccount or none.
  SecretType?: string;

  // The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.
  SyncRepo?: string;

  // Period in seconds(int64 format) between consecutive syncs. Default: 15.
  SyncWaitSecs?: string;
}

export function Gkehub_FeatureMembershipConfigmanagementConfigSyncOci_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GcpServiceAccountEmail",
      "The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PolicyDir",
      "The absolute path of the directory that contains the local resources. Default: the root directory of the image.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SecretType",
      "Type of secret configured for access to the OCI Image. Must be one of gcenode, gcpserviceaccount or none.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SyncRepo",
      "The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SyncWaitSecs",
      "Period in seconds(int64 format) between consecutive syncs. Default: 15.",
      [],
      false,
      false,
    ),
  ];
}
