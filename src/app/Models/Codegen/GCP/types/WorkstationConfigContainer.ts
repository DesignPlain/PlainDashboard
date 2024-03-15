export interface WorkstationConfigContainer {
  // If set, overrides the default DIR specified by the image.
  WorkingDir?: string;

  // Arguments passed to the entrypoint.
  Args?: Array<string>;

  // If set, overrides the default ENTRYPOINT specified by the image.
  Commands?: Array<string>;

  /*
Environment variables passed to the container.
The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
*/
  Env?: Map<string, string>;

  // Docker image defining the container. This image must be accessible by the config's service account.
  Image?: string;

  // If set, overrides the USER specified in the image with the given uid.
  RunAsUser?: number;
}
