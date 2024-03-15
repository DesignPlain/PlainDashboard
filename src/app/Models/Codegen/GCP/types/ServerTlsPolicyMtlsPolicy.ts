import { ServerTlsPolicyMtlsPolicyClientValidationCa } from "./ServerTlsPolicyMtlsPolicyClientValidationCa";

export interface ServerTlsPolicyMtlsPolicy {
  /*
When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled.
Required if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty.
Possible values are: `CLIENT_VALIDATION_MODE_UNSPECIFIED`, `ALLOW_INVALID_OR_MISSING_CLIENT_CERT`, `REJECT_INVALID`.
*/
  ClientValidationMode?: string;

  /*
Reference to the TrustConfig from certificatemanager.googleapis.com namespace.
If specified, the chain validation will be performed against certificates configured in the given TrustConfig.
Allowed only if the policy is to be used with external HTTPS load balancers.
*/
  ClientValidationTrustConfig?: string;

  /*
Required if the policy is to be used with Traffic Director. For external HTTPS load balancers it must be empty.
Defines the mechanism to obtain the Certificate Authority certificate to validate the client certificate.
Structure is documented below.
*/
  ClientValidationCas?: Array<ServerTlsPolicyMtlsPolicyClientValidationCa>;
}
