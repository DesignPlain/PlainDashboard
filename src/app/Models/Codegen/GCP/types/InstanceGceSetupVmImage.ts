export interface InstanceGceSetupVmImage {
  /*
Optional. Use this VM image family to find the image; the newest
image in this family will be used.
*/
  Family?: string;

  // Optional. Use VM image name to find the image.
  Name?: string;

  /*
The name of the Google Cloud project that this VM image belongs to.
Format: {project_id}
*/
  Project?: string;
}
