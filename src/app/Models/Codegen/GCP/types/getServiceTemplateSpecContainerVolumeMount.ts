export interface getServiceTemplateSpecContainerVolumeMount {
  /*
Path within the container at which the volume should be mounted.  Must
not contain ':'.
*/
  MountPath?: string;

  // The name of the Cloud Run Service.
  Name?: string;
}
