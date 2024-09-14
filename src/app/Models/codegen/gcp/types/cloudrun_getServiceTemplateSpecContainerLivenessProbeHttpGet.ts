import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGetHttpHeader,
  cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGetHttpHeader_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGetHttpHeader";

export interface cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGet {
  // Custom headers to set in the request. HTTP allows repeated headers.
  httpHeaders?: Array<cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGetHttpHeader>;

  // Path to access on the HTTP server. If set, it should not be empty string.
  path?: string;

  /*
Port number to access on the container. Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  port?: number;
}

export function cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "httpHeaders",
      "Custom headers to set in the request. HTTP allows repeated headers.",
      () =>
        cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGetHttpHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path to access on the HTTP server. If set, it should not be empty string.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number to access on the container. Number must be in the range 1 to 65535.\nIf not specified, defaults to the same value as container.ports[0].containerPort.",
      () => [],
      true,
      false,
    ),
  ];
}