import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appmesh_VirtualGatewaySpecLogging,
  appmesh_VirtualGatewaySpecLogging_GetTypes,
} from "./appmesh_VirtualGatewaySpecLogging";
import {
  appmesh_VirtualGatewaySpecBackendDefaults,
  appmesh_VirtualGatewaySpecBackendDefaults_GetTypes,
} from "./appmesh_VirtualGatewaySpecBackendDefaults";
import {
  appmesh_VirtualGatewaySpecListener,
  appmesh_VirtualGatewaySpecListener_GetTypes,
} from "./appmesh_VirtualGatewaySpecListener";

export interface appmesh_VirtualGatewaySpec {
  // Defaults for backends.
  backendDefaults?: appmesh_VirtualGatewaySpecBackendDefaults;

  // Listeners that the mesh endpoint is expected to receive inbound traffic from. You can specify one listener.
  listeners?: Array<appmesh_VirtualGatewaySpecListener>;

  // Inbound and outbound access logging information for the virtual gateway.
  logging?: appmesh_VirtualGatewaySpecLogging;
}

export function appmesh_VirtualGatewaySpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "backendDefaults",
      "Defaults for backends.",
      () => appmesh_VirtualGatewaySpecBackendDefaults_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "listeners",
      "Listeners that the mesh endpoint is expected to receive inbound traffic from. You can specify one listener.",
      () => appmesh_VirtualGatewaySpecListener_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "logging",
      "Inbound and outbound access logging information for the virtual gateway.",
      () => appmesh_VirtualGatewaySpecLogging_GetTypes(),
      false,
      false,
    ),
  ];
}
