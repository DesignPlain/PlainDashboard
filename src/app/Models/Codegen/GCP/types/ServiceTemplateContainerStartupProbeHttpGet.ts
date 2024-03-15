import { ServiceTemplateContainerStartupProbeHttpGetHttpHeader } from "./ServiceTemplateContainerStartupProbeHttpGetHttpHeader";

export interface ServiceTemplateContainerStartupProbeHttpGet {
  /*
Custom headers to set in the request. HTTP allows repeated headers.
Structure is documented below.
*/
  HttpHeaders?: Array<ServiceTemplateContainerStartupProbeHttpGetHttpHeader>;

  // Path to access on the HTTP server. Defaults to '/'.
  Path?: string;

  /*
Port number to access on the container. Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  Port?: number;
}
