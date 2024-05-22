import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustAcm {
  //
  certificateAuthorityArns?: Array<string>;
}

export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrustAcm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "certificateAuthorityArns",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
