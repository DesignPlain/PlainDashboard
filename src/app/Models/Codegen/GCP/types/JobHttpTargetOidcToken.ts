export interface JobHttpTargetOidcToken {
  /*
Audience to be used when generating OIDC token. If not specified,
the URI specified in target will be used.
*/
  Audience?: string;

  /*
Service account email to be used for generating OAuth token.
The service account must be within the same project as the job.
*/
  ServiceAccountEmail?: string;
}
