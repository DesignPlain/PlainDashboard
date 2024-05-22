import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkehub_FeatureMembershipConfigmanagementConfigSyncOci {
  // The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.
  gcpServiceAccountEmail?: string;

  // The absolute path of the directory that contains the local resources. Default: the root directory of the image.
  policyDir?: string;

  // Type of secret configured for access to the OCI Image. Must be one of gcenode, gcpserviceaccount or none.
  secretType?: string;

  // The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.
  syncRepo?: string;

  // Period in seconds(int64 format) between consecutive syncs. Default: 15.
  syncWaitSecs?: string;
}

export function gkehub_FeatureMembershipConfigmanagementConfigSyncOci_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "syncRepo",
      "The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "syncWaitSecs",
      "Period in seconds(int64 format) between consecutive syncs. Default: 15.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gcpServiceAccountEmail",
      "The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "policyDir",
      "The absolute path of the directory that contains the local resources. Default: the root directory of the image.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretType",
      "Type of secret configured for access to the OCI Image. Must be one of gcenode, gcpserviceaccount or none.",
      [],
      false,
      false,
    ),
  ];
}
