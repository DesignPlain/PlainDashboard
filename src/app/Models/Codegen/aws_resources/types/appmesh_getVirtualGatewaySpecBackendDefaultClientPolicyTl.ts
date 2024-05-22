import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate";
import {
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation,
  appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation_GetTypes,
} from "./appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation";

export interface appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTl {
  //
  validations?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation>;

  //
  certificates?: Array<appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate>;

  //
  enforce?: boolean;

  //
  ports?: Array<number>;
}

export function appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "validations",
      "",
      appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlValidation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "certificates",
      "",
      appmesh_getVirtualGatewaySpecBackendDefaultClientPolicyTlCertificate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enforce", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "ports",
      "",
      InputType_Number_GetTypes(),
      true,
      false,
    ),
  ];
}
