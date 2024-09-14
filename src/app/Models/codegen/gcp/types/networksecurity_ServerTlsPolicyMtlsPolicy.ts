import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa,
  networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa_GetTypes,
} from "./networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa";

export interface networksecurity_ServerTlsPolicyMtlsPolicy {
  /*
Required if the policy is to be used with Traffic Director. For external HTTPS load balancers it must be empty.
Defines the mechanism to obtain the Certificate Authority certificate to validate the client certificate.
Structure is documented below.
*/
  clientValidationCas?: Array<networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa>;

  /*
When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled.
Required if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty.
Possible values are: `CLIENT_VALIDATION_MODE_UNSPECIFIED`, `ALLOW_INVALID_OR_MISSING_CLIENT_CERT`, `REJECT_INVALID`.
*/
  clientValidationMode?: string;

  /*
Reference to the TrustConfig from certificatemanager.googleapis.com namespace.
If specified, the chain validation will be performed against certificates configured in the given TrustConfig.
Allowed only if the policy is to be used with external HTTPS load balancers.
*/
  clientValidationTrustConfig?: string;
}

export function networksecurity_ServerTlsPolicyMtlsPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "clientValidationCas",
      "Required if the policy is to be used with Traffic Director. For external HTTPS load balancers it must be empty.\nDefines the mechanism to obtain the Certificate Authority certificate to validate the client certificate.\nStructure is documented below.",
      () =>
        networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientValidationMode",
      "When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled.\nRequired if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty.\nPossible values are: `CLIENT_VALIDATION_MODE_UNSPECIFIED`, `ALLOW_INVALID_OR_MISSING_CLIENT_CERT`, `REJECT_INVALID`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientValidationTrustConfig",
      "Reference to the TrustConfig from certificatemanager.googleapis.com namespace.\nIf specified, the chain validation will be performed against certificates configured in the given TrustConfig.\nAllowed only if the policy is to be used with external HTTPS load balancers.",
      () => [],
      false,
      false,
    ),
  ];
}
