export interface ServiceTemplateContainerEnvValueSourceSecretKeyRef {
  // The name of the secret in Cloud Secret Manager. Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.
  Secret?: string;

  // The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version.
  Version?: string;
}
