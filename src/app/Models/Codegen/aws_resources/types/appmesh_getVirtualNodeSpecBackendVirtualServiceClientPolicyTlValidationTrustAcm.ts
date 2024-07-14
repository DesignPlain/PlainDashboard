import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm {
  //
  certificateAuthorityArns?: Array<string>;
}

export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlValidationTrustAcm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "certificateAuthorityArns",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
