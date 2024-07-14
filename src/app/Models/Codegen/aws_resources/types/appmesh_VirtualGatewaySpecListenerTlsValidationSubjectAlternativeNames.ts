import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch,
  appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch_GetTypes,
} from "./appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch";

export interface appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames {
  // Criteria for determining a SAN's match.
  match?: appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch;
}

export function appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining a SAN's match.",
      appmesh_VirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
