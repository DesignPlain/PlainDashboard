export interface getJobTemplateTemplateContainerVolumeMount {
  // Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run
  MountPath?: string;

  // The name of the Cloud Run v2 Job.
  Name?: string;
}
