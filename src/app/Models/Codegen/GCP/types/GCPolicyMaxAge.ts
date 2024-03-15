export interface GCPolicyMaxAge {
  // Number of days before applying GC policy.
  Days?: number;

  /*
Duration before applying GC policy (ex. "8h"). This is required when `days` isn't set

-----
*/
  Duration?: string;
}
