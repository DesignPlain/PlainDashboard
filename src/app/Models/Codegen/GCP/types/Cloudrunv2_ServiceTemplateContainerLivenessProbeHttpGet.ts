import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGetHttpHeader,
  Cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGetHttpHeader_GetTypes,
} from "./Cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGetHttpHeader";

export interface Cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGet {
  // Path to access on the HTTP server. Defaults to '/'.
  Path?: string;

  /*
Port number to access on the container. Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  Port?: number;

  /*
Custom headers to set in the request. HTTP allows repeated headers.
Structure is documented below.
*/
  HttpHeaders?: Array<Cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGetHttpHeader>;
}

export function Cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Path to access on the HTTP server. Defaults to '/'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Port number to access on the container. Must be in the range 1 to 65535.\nIf not specified, defaults to the same value as container.ports[0].containerPort.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HttpHeaders",
      "Custom headers to set in the request. HTTP allows repeated headers.\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateContainerLivenessProbeHttpGetHttpHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
