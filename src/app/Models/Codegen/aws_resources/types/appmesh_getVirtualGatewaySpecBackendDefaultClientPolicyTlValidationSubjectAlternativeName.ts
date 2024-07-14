import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch";

export interface appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName {
  //
  matches?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch>;
}

export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
