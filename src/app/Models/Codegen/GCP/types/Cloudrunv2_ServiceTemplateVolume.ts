import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_ServiceTemplateVolumeEmptyDir,
  Cloudrunv2_ServiceTemplateVolumeEmptyDir_GetTypes,
} from "./Cloudrunv2_ServiceTemplateVolumeEmptyDir";
import {
  Cloudrunv2_ServiceTemplateVolumeGcs,
  Cloudrunv2_ServiceTemplateVolumeGcs_GetTypes,
} from "./Cloudrunv2_ServiceTemplateVolumeGcs";
import {
  Cloudrunv2_ServiceTemplateVolumeNfs,
  Cloudrunv2_ServiceTemplateVolumeNfs_GetTypes,
} from "./Cloudrunv2_ServiceTemplateVolumeNfs";
import {
  Cloudrunv2_ServiceTemplateVolumeSecret,
  Cloudrunv2_ServiceTemplateVolumeSecret_GetTypes,
} from "./Cloudrunv2_ServiceTemplateVolumeSecret";
import {
  Cloudrunv2_ServiceTemplateVolumeCloudSqlInstance,
  Cloudrunv2_ServiceTemplateVolumeCloudSqlInstance_GetTypes,
} from "./Cloudrunv2_ServiceTemplateVolumeCloudSqlInstance";

export interface Cloudrunv2_ServiceTemplateVolume {
  /*
Ephemeral storage used as a shared volume.
Structure is documented below.
*/
  EmptyDir?: Cloudrunv2_ServiceTemplateVolumeEmptyDir;

  /*
Represents a GCS Bucket mounted as a volume.
Structure is documented below.
*/
  Gcs?: Cloudrunv2_ServiceTemplateVolumeGcs;

  // Volume's name.
  Name?: string;

  /*
Represents an NFS mount.
Structure is documented below.
*/
  Nfs?: Cloudrunv2_ServiceTemplateVolumeNfs;

  /*
Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
Structure is documented below.
*/
  Secret?: Cloudrunv2_ServiceTemplateVolumeSecret;

  /*
For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
Structure is documented below.
*/
  CloudSqlInstance?: Cloudrunv2_ServiceTemplateVolumeCloudSqlInstance;
}

export function Cloudrunv2_ServiceTemplateVolume_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Secret",
      "Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateVolumeSecret_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CloudSqlInstance",
      "For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateVolumeCloudSqlInstance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EmptyDir",
      "Ephemeral storage used as a shared volume.\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateVolumeEmptyDir_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Gcs",
      "Represents a GCS Bucket mounted as a volume.\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateVolumeGcs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Volume's name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Nfs",
      "Represents an NFS mount.\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateVolumeNfs_GetTypes(),
      false,
      false,
    ),
  ];
}
