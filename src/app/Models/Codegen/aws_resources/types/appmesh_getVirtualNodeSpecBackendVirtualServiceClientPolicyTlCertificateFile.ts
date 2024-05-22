import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateFile {
  //
  certificateChain?: string;

  //
  privateKey?: string;
}

export function appmesh_getVirtualNodeSpecBackendVirtualServiceClientPolicyTlCertificateFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "certificateChain",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "privateKey", "", [], true, false),
  ];
}
