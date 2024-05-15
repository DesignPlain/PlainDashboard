import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader,
  Cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader";

export interface Cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet {
  // Path to access on the HTTP server. If set, it should not be empty string.
  Path?: string;

  /*
Port number to access on the container. Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  Port?: number;

  // Custom headers to set in the request. HTTP allows repeated headers.
  HttpHeaders?: Array<Cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader>;
}

export function Cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Path to access on the HTTP server. If set, it should not be empty string.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Port number to access on the container. Number must be in the range 1 to 65535.\nIf not specified, defaults to the same value as container.ports[0].containerPort.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HttpHeaders",
      "Custom headers to set in the request. HTTP allows repeated headers.",
      Cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader_GetTypes(),
      true,
      false,
    ),
  ];
}
