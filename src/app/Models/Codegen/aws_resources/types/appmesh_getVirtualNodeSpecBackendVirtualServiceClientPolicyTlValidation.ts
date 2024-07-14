import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeName,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeName_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeName";
import {
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust,
  appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust";

export interface appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidation {
  //
  subjectAlternativeNames?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeName>;

  //
  trusts?: Array<appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust>;
}

export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subjectAlternativeNames",
      "",
      appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationSubjectAlternativeName_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "trusts",
      "",
      appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrust_GetTypes(),
      true,
      false,
    ),
  ];
}
