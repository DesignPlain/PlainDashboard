import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGetHttpHeader,
  cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGetHttpHeader_GetTypes,
} from "./cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGetHttpHeader";

export interface cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet {
  // Custom headers to set in the request. HTTP allows repeated headers.
  httpHeaders?: Array<cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGetHttpHeader>;

  // Path to access on the HTTP server. Defaults to '/'.
  path?: string;

  /*
Port number to access on the container. Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  port?: number;
}

export function cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "httpHeaders",
      "Custom headers to set in the request. HTTP allows repeated headers.",
      cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGetHttpHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path to access on the HTTP server. Defaults to '/'.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number to access on the container. Number must be in the range 1 to 65535.\nIf not specified, defaults to the same value as container.ports[0].containerPort.",
      [],
      true,
      false,
    ),
  ];
}
