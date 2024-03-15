import { ServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader } from "./ServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader";

export interface ServiceTemplateSpecContainerStartupProbeHttpGet {
  /*
Custom headers to set in the request. HTTP allows repeated headers.
Structure is documented below.
*/
  HttpHeaders?: Array<ServiceTemplateSpecContainerStartupProbeHttpGetHttpHeader>;

  // Path to access on the HTTP server. If set, it should not be empty string.
  Path?: string;

  /*
Port number to access on the container. Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  Port?: number;
}
