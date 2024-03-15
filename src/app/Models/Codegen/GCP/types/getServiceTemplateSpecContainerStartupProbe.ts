import { getServiceTemplateSpecContainerStartupProbeTcpSocket } from "./getServiceTemplateSpecContainerStartupProbeTcpSocket";
import { getServiceTemplateSpecContainerStartupProbeGrpc } from "./getServiceTemplateSpecContainerStartupProbeGrpc";
import { getServiceTemplateSpecContainerStartupProbeHttpGet } from "./getServiceTemplateSpecContainerStartupProbeHttpGet";

export interface getServiceTemplateSpecContainerStartupProbe {
  // TcpSocket specifies an action involving a TCP port.
  TcpSockets?: Array<getServiceTemplateSpecContainerStartupProbeTcpSocket>;

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

  // GRPC specifies an action involving a GRPC port.
  Grpcs?: Array<getServiceTemplateSpecContainerStartupProbeGrpc>;

  // HttpGet specifies the http request to perform.
  HttpGets?: Array<getServiceTemplateSpecContainerStartupProbeHttpGet>;

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
}
