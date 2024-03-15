export interface RuntimeSoftwareConfigKernel {
  /*
The path to the container image repository.
For example: gcr.io/{project_id}/{imageName}
*/
  Repository?: string;

  // The tag of the container image. If not specified, this defaults to the latest tag.
  Tag?: string;
}
