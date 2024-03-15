export interface getServiceTemplateSpecContainerEnvValueFromSecretKeyRef {
  /*
A Cloud Secret Manager secret version. Must be 'latest' for the latest
version or an integer for a specific version.
*/
  Key?: string;

  // The name of the Cloud Run Service.
  Name?: string;
}
