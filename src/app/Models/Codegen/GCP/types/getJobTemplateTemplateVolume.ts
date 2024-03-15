import { getJobTemplateTemplateVolumeCloudSqlInstance } from "./getJobTemplateTemplateVolumeCloudSqlInstance";
import { getJobTemplateTemplateVolumeEmptyDir } from "./getJobTemplateTemplateVolumeEmptyDir";
import { getJobTemplateTemplateVolumeSecret } from "./getJobTemplateTemplateVolumeSecret";

export interface getJobTemplateTemplateVolume {
  // The name of the Cloud Run v2 Job.
  Name?: string;

  // Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  Secrets?: Array<getJobTemplateTemplateVolumeSecret>;

  // For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
  CloudSqlInstances?: Array<getJobTemplateTemplateVolumeCloudSqlInstance>;

  // Ephemeral storage used as a shared volume.
  EmptyDirs?: Array<getJobTemplateTemplateVolumeEmptyDir>;
}
