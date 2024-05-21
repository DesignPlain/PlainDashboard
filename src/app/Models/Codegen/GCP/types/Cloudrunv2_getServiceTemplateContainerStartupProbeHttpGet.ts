import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader,
  cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader_GetTypes,
} from "./cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader";

export interface cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet {
  /*
Port number to access on the container. Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  port?: number;

  // Custom headers to set in the request. HTTP allows repeated headers.
  httpHeaders?: Array<cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader>;

  // Path to access on the HTTP server. Defaults to '/'.
  path?: string;
}

export function cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number to access on the container. Must be in the range 1 to 65535.\nIf not specified, defaults to the same value as container.ports[0].containerPort.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "httpHeaders",
      "Custom headers to set in the request. HTTP allows repeated headers.",
      cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader_GetTypes(),
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
  ];
}
