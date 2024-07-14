import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateSd {
  //
  secretName?: string;
}

export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateSd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "secretName", "", [], true, false),
  ];
}
