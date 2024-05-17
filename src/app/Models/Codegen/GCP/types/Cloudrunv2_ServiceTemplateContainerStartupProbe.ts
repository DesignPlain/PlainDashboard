import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_ServiceTemplateContainerStartupProbeGrpc,
  Cloudrunv2_ServiceTemplateContainerStartupProbeGrpc_GetTypes,
} from "./Cloudrunv2_ServiceTemplateContainerStartupProbeGrpc";
import {
  Cloudrunv2_ServiceTemplateContainerStartupProbeHttpGet,
  Cloudrunv2_ServiceTemplateContainerStartupProbeHttpGet_GetTypes,
} from "./Cloudrunv2_ServiceTemplateContainerStartupProbeHttpGet";
import {
  Cloudrunv2_ServiceTemplateContainerStartupProbeTcpSocket,
  Cloudrunv2_ServiceTemplateContainerStartupProbeTcpSocket_GetTypes,
} from "./Cloudrunv2_ServiceTemplateContainerStartupProbeTcpSocket";

export interface Cloudrunv2_ServiceTemplateContainerStartupProbe {
  /*
TCPSocket specifies an action involving a TCP port. Exactly one of HTTPGet or TCPSocket must be specified.
Structure is documented below.
*/
  TcpSocket?: Cloudrunv2_ServiceTemplateContainerStartupProbeTcpSocket;

  // Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  TimeoutSeconds?: number;

  // Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  FailureThreshold?: number;

  /*
GRPC specifies an action involving a GRPC port.
Structure is documented below.
*/
  Grpc?: Cloudrunv2_ServiceTemplateContainerStartupProbeGrpc;

  /*
HTTPGet specifies the http request to perform. Exactly one of HTTPGet or TCPSocket must be specified.
Structure is documented below.
*/
  HttpGet?: Cloudrunv2_ServiceTemplateContainerStartupProbeHttpGet;

  // Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  InitialDelaySeconds?: number;

  // How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds
  PeriodSeconds?: number;
}

export function Cloudrunv2_ServiceTemplateContainerStartupProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "TimeoutSeconds",
      "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "FailureThreshold",
      "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Grpc",
      "GRPC specifies an action involving a GRPC port.\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateContainerStartupProbeGrpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HttpGet",
      "HTTPGet specifies the http request to perform. Exactly one of HTTPGet or TCPSocket must be specified.\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateContainerStartupProbeHttpGet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "InitialDelaySeconds",
      "Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "PeriodSeconds",
      "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TcpSocket",
      "TCPSocket specifies an action involving a TCP port. Exactly one of HTTPGet or TCPSocket must be specified.\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateContainerStartupProbeTcpSocket_GetTypes(),
      false,
      false,
    ),
  ];
}
