import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_getVirtualGatewaySpecListenerTlCertificateFile {
  //
  certificateChain?: string;

  //
  privateKey?: string;
}

export function appmesh_getVirtualGatewaySpecListenerTlCertificateFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "certificateChain",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateKey",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
