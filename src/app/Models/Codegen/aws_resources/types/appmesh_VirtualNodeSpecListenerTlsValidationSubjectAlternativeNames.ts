import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch,
  appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch_GetTypes,
} from "./appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch";

export interface appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames {
  // Criteria for determining a SAN's match.
  match?: appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch;
}

export function appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNames_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "match",
      "Criteria for determining a SAN's match.",
      appmesh_VirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
