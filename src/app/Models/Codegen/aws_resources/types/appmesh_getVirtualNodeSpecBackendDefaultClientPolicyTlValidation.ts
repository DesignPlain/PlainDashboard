import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrust,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrust_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrust";
import {
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName,
  appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName_GetTypes,
} from "./appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName";

export interface appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation {
  //
  subjectAlternativeNames?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName>;

  //
  trusts?: Array<appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrust>;
}

export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "subjectAlternativeNames",
      "",
      appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeName_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "trusts",
      "",
      appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationTrust_GetTypes(),
      true,
      false,
    ),
  ];
}
