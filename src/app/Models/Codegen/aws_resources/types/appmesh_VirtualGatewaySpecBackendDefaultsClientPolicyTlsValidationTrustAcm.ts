import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  // One or more ACM ARNs.
  certificateAuthorityArns?: Array<string>;
}

export function appmesh_VirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "certificateAuthorityArns",
      "One or more ACM ARNs.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
