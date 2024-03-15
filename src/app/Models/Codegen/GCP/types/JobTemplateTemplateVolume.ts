import { JobTemplateTemplateVolumeCloudSqlInstance } from "./JobTemplateTemplateVolumeCloudSqlInstance";
import { JobTemplateTemplateVolumeEmptyDir } from "./JobTemplateTemplateVolumeEmptyDir";
import { JobTemplateTemplateVolumeSecret } from "./JobTemplateTemplateVolumeSecret";

export interface JobTemplateTemplateVolume {
  /*
For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
Structure is documented below.
*/
  CloudSqlInstance?: JobTemplateTemplateVolumeCloudSqlInstance;

  /*
Ephemeral storage used as a shared volume.
Structure is documented below.
*/
  EmptyDir?: JobTemplateTemplateVolumeEmptyDir;

  // Volume's name.
  Name?: string;

  /*
Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
Structure is documented below.
*/
  Secret?: JobTemplateTemplateVolumeSecret;
}
