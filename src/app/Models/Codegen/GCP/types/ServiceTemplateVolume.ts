import { ServiceTemplateVolumeCloudSqlInstance } from "./ServiceTemplateVolumeCloudSqlInstance";
import { ServiceTemplateVolumeEmptyDir } from "./ServiceTemplateVolumeEmptyDir";
import { ServiceTemplateVolumeGcs } from "./ServiceTemplateVolumeGcs";
import { ServiceTemplateVolumeNfs } from "./ServiceTemplateVolumeNfs";
import { ServiceTemplateVolumeSecret } from "./ServiceTemplateVolumeSecret";

export interface ServiceTemplateVolume {
  // Volume's name.
  Name?: string;

  /*
Represents an NFS mount.
Structure is documented below.
*/
  Nfs?: ServiceTemplateVolumeNfs;

  /*
Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
Structure is documented below.
*/
  Secret?: ServiceTemplateVolumeSecret;

  /*
For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
Structure is documented below.
*/
  CloudSqlInstance?: ServiceTemplateVolumeCloudSqlInstance;

  /*
Ephemeral storage used as a shared volume.
Structure is documented below.
*/
  EmptyDir?: ServiceTemplateVolumeEmptyDir;

  /*
Represents a GCS Bucket mounted as a volume.
Structure is documented below.
*/
  Gcs?: ServiceTemplateVolumeGcs;
}
