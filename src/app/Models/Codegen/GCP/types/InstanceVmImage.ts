export interface InstanceVmImage {
  // Use this VM image family to find the image; the newest image in this family will be used.
  ImageFamily?: string;

  // Use VM image name to find the image.
  ImageName?: string;

  /*
The name of the Google Cloud project that this VM image belongs to.
Format: projects/{project_id}
*/
  Project?: string;
}
