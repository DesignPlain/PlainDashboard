import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName,
  appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName";
import {
  appmesh_getVirtualGatewaySpecListenerTlValidationTrust,
  appmesh_getVirtualGatewaySpecListenerTlValidationTrust_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTlValidationTrust";

export interface appmesh_getVirtualGatewaySpecListenerTlValidation {
  //
  subjectAlternativeNames?: Array<appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName>;

  //
  trusts?: Array<appmesh_getVirtualGatewaySpecListenerTlValidationTrust>;
}

export function appmesh_getVirtualGatewaySpecListenerTlValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subjectAlternativeNames",
      "",
      () =>
        appmesh_getVirtualGatewaySpecListenerTlValidationSubjectAlternativeName_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "trusts",
      "",
      () => appmesh_getVirtualGatewaySpecListenerTlValidationTrust_GetTypes(),
      true,
      false,
    ),
  ];
}
