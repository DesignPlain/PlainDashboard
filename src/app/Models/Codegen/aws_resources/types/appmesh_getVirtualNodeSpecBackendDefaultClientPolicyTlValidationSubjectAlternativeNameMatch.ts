import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch {
  //
  exacts?: Array<string>;
}

export function appmesh_getVirtualNodeSpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "exacts",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}