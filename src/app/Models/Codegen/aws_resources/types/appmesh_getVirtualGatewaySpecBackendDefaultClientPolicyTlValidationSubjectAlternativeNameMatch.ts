import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch {
  //
  exacts?: Array<string>;
}

export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidationSubjectAlternativeNameMatch_GetTypes(): DynamicUIProps[] {
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
