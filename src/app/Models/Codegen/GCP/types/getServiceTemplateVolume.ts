import { getServiceTemplateVolumeEmptyDir } from "./getServiceTemplateVolumeEmptyDir";
import { getServiceTemplateVolumeGc } from "./getServiceTemplateVolumeGc";
import { getServiceTemplateVolumeNf } from "./getServiceTemplateVolumeNf";
import { getServiceTemplateVolumeSecret } from "./getServiceTemplateVolumeSecret";
import { getServiceTemplateVolumeCloudSqlInstance } from "./getServiceTemplateVolumeCloudSqlInstance";

export interface getServiceTemplateVolume {
  // For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
  CloudSqlInstances?: Array<getServiceTemplateVolumeCloudSqlInstance>;

  // Ephemeral storage used as a shared volume.
  EmptyDirs?: Array<getServiceTemplateVolumeEmptyDir>;

  // Represents a GCS Bucket mounted as a volume.
  Gcs?: Array<getServiceTemplateVolumeGc>;

  // The name of the Cloud Run v2 Service.
  Name?: string;

  // Represents an NFS mount.
  Nfs?: Array<getServiceTemplateVolumeNf>;

  // Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  Secrets?: Array<getServiceTemplateVolumeSecret>;
}
