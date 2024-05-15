import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci {
  // The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount
  GcpServiceAccountEmail?: string;

  // The absolute path of the directory that contains the local resources. Default: the root directory of the image
  PolicyDir?: string;

  // Type of secret configured for access to the Git repo
  SecretType?: string;

  // The OCI image repository URL for the package to sync from
  SyncRepo?: string;

  // Period in seconds between consecutive syncs. Default: 15
  SyncWaitSecs?: string;

  /*
(Optional, Deprecated)
Version of ACM installed

> --Warning:-- The `configmanagement.config_sync.oci.version` field is deprecated and will be removed in a future major release. Please use `configmanagement.version` field to specify the version of ACM installed instead.
*/
  Version?: string;
}

export function Gkehub_FeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PolicyDir",
      "The absolute path of the directory that contains the local resources. Default: the root directory of the image",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SecretType",
      "Type of secret configured for access to the Git repo",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SyncRepo",
      "The OCI image repository URL for the package to sync from",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SyncWaitSecs",
      "Period in seconds between consecutive syncs. Default: 15",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "(Optional, Deprecated)\nVersion of ACM installed\n\n> **Warning:** The `configmanagement.config_sync.oci.version` field is deprecated and will be removed in a future major release. Please use `configmanagement.version` field to specify the version of ACM installed instead.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GcpServiceAccountEmail",
      "The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount",
      [],
      false,
      false,
    ),
  ];
}
