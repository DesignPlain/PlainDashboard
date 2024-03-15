import { ServiceTemplateContainerLivenessProbeHttpGet } from "./ServiceTemplateContainerLivenessProbeHttpGet";
import { ServiceTemplateContainerLivenessProbeTcpSocket } from "./ServiceTemplateContainerLivenessProbeTcpSocket";
import { ServiceTemplateContainerLivenessProbeGrpc } from "./ServiceTemplateContainerLivenessProbeGrpc";

export interface ServiceTemplateContainerLivenessProbe {
  // How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds
  PeriodSeconds?: number;

  /*
TCPSocketAction describes an action based on opening a socket
Structure is documented below.
*/
  TcpSocket?: ServiceTemplateContainerLivenessProbeTcpSocket;

  // Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  TimeoutSeconds?: number;

  // Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  FailureThreshold?: number;

  /*
GRPC specifies an action involving a GRPC port.
Structure is documented below.
*/
  Grpc?: ServiceTemplateContainerLivenessProbeGrpc;

  /*
HTTPGet specifies the http request to perform.
Structure is documented below.
*/
  HttpGet?: ServiceTemplateContainerLivenessProbeHttpGet;

  // Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  InitialDelaySeconds?: number;
}
