export interface getFunctionSourceRepository {
  // The URL pointing to the hosted repository where the function was defined at the time of deployment.
  DeployedUrl?: string;

  // The URL pointing to the hosted repository where the function is defined.
  Url?: string;
}
