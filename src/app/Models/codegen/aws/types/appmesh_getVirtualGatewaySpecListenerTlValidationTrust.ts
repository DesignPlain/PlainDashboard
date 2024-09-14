import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_getVirtualGatewaySpecListenerTlValidationTrustFile,
  appmesh_getVirtualGatewaySpecListenerTlValidationTrustFile_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTlValidationTrustFile";
import {
  appmesh_getVirtualGatewaySpecListenerTlValidationTrustSd,
  appmesh_getVirtualGatewaySpecListenerTlValidationTrustSd_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTlValidationTrustSd";

export interface appmesh_getVirtualGatewaySpecListenerTlValidationTrust {
  //
  files?: Array<appmesh_getVirtualGatewaySpecListenerTlValidationTrustFile>;

  //
  sds?: Array<appmesh_getVirtualGatewaySpecListenerTlValidationTrustSd>;
}

export function appmesh_getVirtualGatewaySpecListenerTlValidationTrust_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "files",
      "",
      () =>
        appmesh_getVirtualGatewaySpecListenerTlValidationTrustFile_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sds",
      "",
      () => appmesh_getVirtualGatewaySpecListenerTlValidationTrustSd_GetTypes(),
      true,
      false,
    ),
  ];
}
