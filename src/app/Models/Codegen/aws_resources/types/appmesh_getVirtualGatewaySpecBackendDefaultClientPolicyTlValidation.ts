import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName";
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust";

export interface appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation {
  //
  subjectAlternativeNames?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName>;

  //
  trusts?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust>;
}

export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subjectAlternativeNames",
      "",
      appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "trusts",
      "",
      appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationTrust_GetTypes(),
      true,
      false,
    ),
  ];
}
