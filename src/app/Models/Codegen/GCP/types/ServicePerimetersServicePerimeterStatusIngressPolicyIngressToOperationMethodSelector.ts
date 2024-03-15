export interface ServicePerimetersServicePerimeterStatusIngressPolicyIngressToOperationMethodSelector {
  /*
Value for `method` should be a valid method name for the corresponding
`serviceName` in `ApiOperation`. If `-` used as value for method,
then ALL methods and permissions are allowed.
*/
  Method?: string;

  /*
Value for permission should be a valid Cloud IAM permission for the
corresponding `serviceName` in `ApiOperation`.
*/
  Permission?: string;
}
