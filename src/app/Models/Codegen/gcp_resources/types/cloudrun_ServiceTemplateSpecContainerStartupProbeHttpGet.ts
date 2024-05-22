import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader,
  cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader";

export interface cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGet {
  /*
Custom headers to set in the request. HTTP allows repeated headers.
Structure is documented below.
*/
  httpHeaders?: Array<cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader>;

  // Path to access on the HTTP server. If set, it should not be empty string.
  path?: string;

  /*
Port number to access on the container. Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  port?: number;
}

export function cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "httpHeaders",
      "Custom headers to set in the request. HTTP allows repeated headers.\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path to access on the HTTP server. If set, it should not be empty string.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number to access on the container. Number must be in the range 1 to 65535.\nIf not specified, defaults to the same value as container.ports[0].containerPort.",
      [],
      false,
      false,
    ),
  ];
}
