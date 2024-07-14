import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getVirtualNodeSpecListenerTlCertificateAcm {
  //
  certificateArn?: string;
}

export function appmesh_getVirtualNodeSpecListenerTlCertificateAcm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "certificateArn", "", [], true, false),
  ];
}
