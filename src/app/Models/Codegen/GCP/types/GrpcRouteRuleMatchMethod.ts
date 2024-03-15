export interface GrpcRouteRuleMatchMethod {
  // Required. Name of the service to match against.
  GrpcService?: string;

  // Specifies that matches are case sensitive. The default value is true.
  CaseSensitive?: boolean;

  // Required. Name of the method to match against.
  GrpcMethod?: string;
}
