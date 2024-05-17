import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_JobTemplateTemplateVolumeSecret,
  Cloudrunv2_JobTemplateTemplateVolumeSecret_GetTypes,
} from "./Cloudrunv2_JobTemplateTemplateVolumeSecret";
import {
  Cloudrunv2_JobTemplateTemplateVolumeCloudSqlInstance,
  Cloudrunv2_JobTemplateTemplateVolumeCloudSqlInstance_GetTypes,
} from "./Cloudrunv2_JobTemplateTemplateVolumeCloudSqlInstance";
import {
  Cloudrunv2_JobTemplateTemplateVolumeEmptyDir,
  Cloudrunv2_JobTemplateTemplateVolumeEmptyDir_GetTypes,
} from "./Cloudrunv2_JobTemplateTemplateVolumeEmptyDir";

export interface Cloudrunv2_JobTemplateTemplateVolume {
  /*
For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
Structure is documented below.
*/
  CloudSqlInstance?: Cloudrunv2_JobTemplateTemplateVolumeCloudSqlInstance;

  /*
Ephemeral storage used as a shared volume.
Structure is documented below.
*/
  EmptyDir?: Cloudrunv2_JobTemplateTemplateVolumeEmptyDir;

  // Volume's name.
  Name?: string;

  /*
Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
Structure is documented below.
*/
  Secret?: Cloudrunv2_JobTemplateTemplateVolumeSecret;
}

export function Cloudrunv2_JobTemplateTemplateVolume_GetTypes(): DynamicUIProps[] {
  return [
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
      "Secret",
      "Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret\nStructure is documented below.",
      Cloudrunv2_JobTemplateTemplateVolumeSecret_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CloudSqlInstance",
      "For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.\nStructure is documented below.",
      Cloudrunv2_JobTemplateTemplateVolumeCloudSqlInstance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EmptyDir",
      "Ephemeral storage used as a shared volume.\nStructure is documented below.",
      Cloudrunv2_JobTemplateTemplateVolumeEmptyDir_GetTypes(),
      false,
      false,
    ),
  ];
}
