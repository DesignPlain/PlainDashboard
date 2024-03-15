export interface ServiceTemplateSpecContainerVolumeMount {
  /*
Path within the container at which the volume should be mounted.  Must
not contain ':'.
*/
  MountPath?: string;

  // This must match the Name of a Volume.
  Name?: string;
}
