import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualGatewaySpecListenerTlValidationTrust,
  appmesh_getVirtualGatewaySpecListenerTlValidationTrust_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTlValidationTrust";
import {
  appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName,
  appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName";

export interface appmesh_getVirtualGatewaySpecListenerTlValidation {
  //
  trusts?: Array<appmesh_getVirtualGatewaySpecListenerTlValidationTrust>;

  //
  subjectAlternativeNames?: Array<appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName>;
}

export function appmesh_getVirtualGatewaySpecListenerTlValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "trusts",
      "",
      appmesh_getVirtualGatewaySpecListenerTlValidationTrust_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subjectAlternativeNames",
      "",
      appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName_GetTypes(),
      true,
      false,
    ),
  ];
}
