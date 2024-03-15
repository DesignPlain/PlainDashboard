export interface FlexibleAppVersionDeploymentCloudBuildOptions {
  // Path to the yaml file used in deployment, used to determine runtime configuration details.
  AppYamlPath?: string;

  /*
The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  CloudBuildTimeout?: string;
}
