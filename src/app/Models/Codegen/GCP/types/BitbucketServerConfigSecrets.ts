export interface BitbucketServerConfigSecrets {
  // The resource name for the admin access token's secret version.
  AdminAccessTokenVersionName?: string;

  // The resource name for the read access token's secret version.
  ReadAccessTokenVersionName?: string;

  /*
Immutable. The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

- - -
*/
  WebhookSecretVersionName?: string;
}
