import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrunv2_ServiceTemplateVolumeSecret,
  cloudrunv2_ServiceTemplateVolumeSecret_GetTypes,
} from "./cloudrunv2_ServiceTemplateVolumeSecret";
import {
  cloudrunv2_ServiceTemplateVolumeCloudSqlInstance,
  cloudrunv2_ServiceTemplateVolumeCloudSqlInstance_GetTypes,
} from "./cloudrunv2_ServiceTemplateVolumeCloudSqlInstance";
import {
  cloudrunv2_ServiceTemplateVolumeEmptyDir,
  cloudrunv2_ServiceTemplateVolumeEmptyDir_GetTypes,
} from "./cloudrunv2_ServiceTemplateVolumeEmptyDir";
import {
  cloudrunv2_ServiceTemplateVolumeGcs,
  cloudrunv2_ServiceTemplateVolumeGcs_GetTypes,
} from "./cloudrunv2_ServiceTemplateVolumeGcs";
import {
  cloudrunv2_ServiceTemplateVolumeNfs,
  cloudrunv2_ServiceTemplateVolumeNfs_GetTypes,
} from "./cloudrunv2_ServiceTemplateVolumeNfs";

export interface cloudrunv2_ServiceTemplateVolume {
  /*
For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
Structure is documented below.
*/
  cloudSqlInstance?: cloudrunv2_ServiceTemplateVolumeCloudSqlInstance;

  /*
Ephemeral storage used as a shared volume.
Structure is documented below.
*/
  emptyDir?: cloudrunv2_ServiceTemplateVolumeEmptyDir;

  /*
Represents a GCS Bucket mounted as a volume.
Structure is documented below.
*/
  gcs?: cloudrunv2_ServiceTemplateVolumeGcs;

  // Volume's name.
  name?: string;

  /*
Represents an NFS mount.
Structure is documented below.
*/
  nfs?: cloudrunv2_ServiceTemplateVolumeNfs;

  /*
Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
Structure is documented below.
*/
  secret?: cloudrunv2_ServiceTemplateVolumeSecret;
}

export function cloudrunv2_ServiceTemplateVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "secret",
      "Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret\nStructure is documented below.",
      cloudrunv2_ServiceTemplateVolumeSecret_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudSqlInstance",
      "For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateVolumeCloudSqlInstance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "emptyDir",
      "Ephemeral storage used as a shared volume.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateVolumeEmptyDir_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcs",
      "Represents a GCS Bucket mounted as a volume.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateVolumeGcs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Volume's name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nfs",
      "Represents an NFS mount.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateVolumeNfs_GetTypes(),
      false,
      false,
    ),
  ];
}
