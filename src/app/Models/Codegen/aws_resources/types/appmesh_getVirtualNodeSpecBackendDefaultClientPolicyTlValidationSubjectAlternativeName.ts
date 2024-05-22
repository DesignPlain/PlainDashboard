import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch";

export interface appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName {
  //
  matches?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch>;
}

export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "",
      appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
