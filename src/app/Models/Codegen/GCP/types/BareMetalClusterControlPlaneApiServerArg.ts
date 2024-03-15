export interface BareMetalClusterControlPlaneApiServerArg {
  // The argument name as it appears on the API Server command line please make sure to remove the leading dashes.
  Argument?: string;

  // The value of the arg as it will be passed to the API Server command line.
  Value?: string;
}
