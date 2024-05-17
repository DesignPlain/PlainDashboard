import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader,
  Cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader";

export interface Cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet {
  // Custom headers to set in the request. HTTP allows repeated headers.
  HttpHeaders?: Array<Cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader>;

  // Path to access on the HTTP server. Defaults to '/'.
  Path?: string;

  /*
Port number to access on the container. Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  Port?: number;
}

export function Cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "HttpHeaders",
      "Custom headers to set in the request. HTTP allows repeated headers.",
      Cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Path to access on the HTTP server. Defaults to '/'.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Port number to access on the container. Must be in the range 1 to 65535.\nIf not specified, defaults to the same value as container.ports[0].containerPort.",
      [],
      true,
      false,
    ),
  ];
}
