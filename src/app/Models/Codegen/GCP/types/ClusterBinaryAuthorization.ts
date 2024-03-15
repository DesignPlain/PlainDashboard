export interface ClusterBinaryAuthorization {
  // Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.
  Enabled?: boolean;

  /*
Mode of operation for Binary Authorization policy evaluation. Valid values are `DISABLED`
and `PROJECT_SINGLETON_POLICY_ENFORCE`.
*/
  EvaluationMode?: string;
}
