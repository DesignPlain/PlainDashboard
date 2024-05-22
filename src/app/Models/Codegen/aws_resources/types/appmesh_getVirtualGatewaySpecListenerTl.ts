import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualGatewaySpecListenerTlCertificate,
  appmesh_getVirtualGatewaySpecListenerTlCertificate_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTlCertificate";
import {
  appmesh_getVirtualGatewaySpecListenerTlValidation,
  appmesh_getVirtualGatewaySpecListenerTlValidation_GetTypes,
} from "./appmesh_getVirtualGatewaySpecListenerTlValidation";

export interface appmesh_getVirtualGatewaySpecListenerTl {
  //
  certificates?: Array<appmesh_getVirtualGatewaySpecListenerTlCertificate>;

  //
  mode?: string;

  //
  validations?: Array<appmesh_getVirtualGatewaySpecListenerTlValidation>;
}

export function appmesh_getVirtualGatewaySpecListenerTl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "certificates",
      "",
      appmesh_getVirtualGatewaySpecListenerTlCertificate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "mode", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "validations",
      "",
      appmesh_getVirtualGatewaySpecListenerTlValidation_GetTypes(),
      true,
      false,
    ),
  ];
}
