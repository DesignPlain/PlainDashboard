import { ServiceTemplateSpecContainerStartupProbeHttpGet } from "./ServiceTemplateSpecContainerStartupProbeHttpGet";
import { ServiceTemplateSpecContainerStartupProbeTcpSocket } from "./ServiceTemplateSpecContainerStartupProbeTcpSocket";
import { ServiceTemplateSpecContainerStartupProbeGrpc } from "./ServiceTemplateSpecContainerStartupProbeGrpc";

export interface ServiceTemplateSpecContainerStartupProbe {
  /*
HttpGet specifies the http request to perform.
Structure is documented below.
*/
  HttpGet?: ServiceTemplateSpecContainerStartupProbeHttpGet;

  /*
Number of seconds after the container has started before the probe is
initiated.
Defaults to 0 seconds. Minimum value is 0. Maximum value is 240.
*/
  InitialDelaySeconds?: number;

  /*
How often (in seconds) to perform the probe.
Default to 10 seconds. Minimum value is 1. Maximum value is 240.
*/
  PeriodSeconds?: number;

  /*
TcpSocket specifies an action involving a TCP port.
Structure is documented below.
*/
  TcpSocket?: ServiceTemplateSpecContainerStartupProbeTcpSocket;

  /*
Number of seconds after which the probe times out.
Defaults to 1 second. Minimum value is 1. Maximum value is 3600.
Must be smaller than periodSeconds.
*/
  TimeoutSeconds?: number;

  /*
Minimum consecutive failures for the probe to be considered failed after
having succeeded. Defaults to 3. Minimum value is 1.
*/
  FailureThreshold?: number;

  /*
GRPC specifies an action involving a GRPC port.
Structure is documented below.
*/
  Grpc?: ServiceTemplateSpecContainerStartupProbeGrpc;
}
