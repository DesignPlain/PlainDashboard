import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader,
  cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader_GetTypes,
} from "./cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader";

export interface cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet {
  // Custom headers to set in the request. HTTP allows repeated headers.
  httpHeaders?: Array<cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader>;

  // Path to access on the HTTP server. Defaults to '/'.
  path?: string;

  /*
Port number to access on the container. Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  port?: number;
}

export function cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "httpHeaders",
      "Custom headers to set in the request. HTTP allows repeated headers.",
      () =>
        cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path to access on the HTTP server. Defaults to '/'.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number to access on the container. Must be in the range 1 to 65535.\nIf not specified, defaults to the same value as container.ports[0].containerPort.",
      () => [],
      true,
      false,
    ),
  ];
}
