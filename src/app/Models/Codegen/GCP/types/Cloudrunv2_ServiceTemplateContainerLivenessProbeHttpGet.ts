import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGetHttpHeader,
  cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGetHttpHeader_GetTypes,
} from "./cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGetHttpHeader";

export interface cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGet {
  /*
Custom headers to set in the request. HTTP allows repeated headers.
Structure is documented below.
*/
  httpHeaders?: Array<cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGetHttpHeader>;

  // Path to access on the HTTP server. Defaults to '/'.
  path?: string;

  /*
Port number to access on the container. Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  port?: number;
}

export function cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "httpHeaders",
      "Custom headers to set in the request. HTTP allows repeated headers.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGetHttpHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path to access on the HTTP server. Defaults to '/'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number to access on the container. Must be in the range 1 to 65535.\nIf not specified, defaults to the same value as container.ports[0].containerPort.",
      [],
      false,
      false,
    ),
  ];
}
