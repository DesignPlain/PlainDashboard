import { ServiceTemplateSpecContainerLivenessProbeGrpc } from "./ServiceTemplateSpecContainerLivenessProbeGrpc";
import { ServiceTemplateSpecContainerLivenessProbeHttpGet } from "./ServiceTemplateSpecContainerLivenessProbeHttpGet";

export interface ServiceTemplateSpecContainerLivenessProbe {
  /*
GRPC specifies an action involving a GRPC port.
Structure is documented below.
*/
  Grpc?: ServiceTemplateSpecContainerLivenessProbeGrpc;

  /*
HttpGet specifies the http request to perform.
Structure is documented below.
*/
  HttpGet?: ServiceTemplateSpecContainerLivenessProbeHttpGet;

  /*
Number of seconds after the container has started before the probe is
initiated.
Defaults to 0 seconds. Minimum value is 0. Maximum value is 3600.
*/
  InitialDelaySeconds?: number;

  /*
How often (in seconds) to perform the probe.
Default to 10 seconds. Minimum value is 1. Maximum value is 3600.
*/
  PeriodSeconds?: number;

  /*
Number of seconds after which the probe times out.
Defaults to 1 second. Minimum value is 1. Maximum value is 3600.
Must be smaller than period_seconds.
*/
  TimeoutSeconds?: number;

  /*
Minimum consecutive failures for the probe to be considered failed after
having succeeded. Defaults to 3. Minimum value is 1.
*/
  FailureThreshold?: number;
}
