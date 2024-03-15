export interface BareMetalClusterBinaryAuthorization {
  /*
Mode of operation for binauthz policy evaluation. If unspecified,
defaults to DISABLED.
Possible values are: `DISABLED`, `PROJECT_SINGLETON_POLICY_ENFORCE`.
*/
  EvaluationMode?: string;
}
