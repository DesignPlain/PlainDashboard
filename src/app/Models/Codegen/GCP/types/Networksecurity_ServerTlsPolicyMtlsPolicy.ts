import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa,
  Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa_GetTypes,
} from "./Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa";

export interface Networksecurity_ServerTlsPolicyMtlsPolicy {
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
  ClientValidationCas?: Array<Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa>;
}

export function Networksecurity_ServerTlsPolicyMtlsPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClientValidationMode",
      "When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled.\nRequired if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty.\nPossible values are: `CLIENT_VALIDATION_MODE_UNSPECIFIED`, `ALLOW_INVALID_OR_MISSING_CLIENT_CERT`, `REJECT_INVALID`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientValidationTrustConfig",
      "Reference to the TrustConfig from certificatemanager.googleapis.com namespace.\nIf specified, the chain validation will be performed against certificates configured in the given TrustConfig.\nAllowed only if the policy is to be used with external HTTPS load balancers.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ClientValidationCas",
      "Required if the policy is to be used with Traffic Director. For external HTTPS load balancers it must be empty.\nDefines the mechanism to obtain the Certificate Authority certificate to validate the client certificate.\nStructure is documented below.",
      Networksecurity_ServerTlsPolicyMtlsPolicyClientValidationCa_GetTypes(),
      false,
      false,
    ),
  ];
}
