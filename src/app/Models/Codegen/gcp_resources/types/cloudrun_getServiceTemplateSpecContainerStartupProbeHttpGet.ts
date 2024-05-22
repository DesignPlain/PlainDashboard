import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader,
  cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader";

export interface cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet {
  // Custom headers to set in the request. HTTP allows repeated headers.
  httpHeaders?: Array<cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader>;

  // Path to access on the HTTP server. If set, it should not be empty string.
  path?: string;

  /*
Port number to access on the container. Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  port?: number;
}

export function cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "httpHeaders",
      "Custom headers to set in the request. HTTP allows repeated headers.",
      cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path to access on the HTTP server. If set, it should not be empty string.",
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
