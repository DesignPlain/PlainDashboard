import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrunv2_ServiceTemplateContainerStartupProbeHttpGet,
  cloudrunv2_ServiceTemplateContainerStartupProbeHttpGet_GetTypes,
} from "./cloudrunv2_ServiceTemplateContainerStartupProbeHttpGet";
import {
  cloudrunv2_ServiceTemplateContainerStartupProbeTcpSocket,
  cloudrunv2_ServiceTemplateContainerStartupProbeTcpSocket_GetTypes,
} from "./cloudrunv2_ServiceTemplateContainerStartupProbeTcpSocket";
import {
  cloudrunv2_ServiceTemplateContainerStartupProbeGrpc,
  cloudrunv2_ServiceTemplateContainerStartupProbeGrpc_GetTypes,
} from "./cloudrunv2_ServiceTemplateContainerStartupProbeGrpc";

export interface cloudrunv2_ServiceTemplateContainerStartupProbe {
  /*
HTTPGet specifies the http request to perform. Exactly one of HTTPGet or TCPSocket must be specified.
Structure is documented below.
*/
  httpGet?: cloudrunv2_ServiceTemplateContainerStartupProbeHttpGet;

  // Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  initialDelaySeconds?: number;

  // How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds
  periodSeconds?: number;

  /*
TCPSocket specifies an action involving a TCP port. Exactly one of HTTPGet or TCPSocket must be specified.
Structure is documented below.
*/
  tcpSocket?: cloudrunv2_ServiceTemplateContainerStartupProbeTcpSocket;

  // Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  timeoutSeconds?: number;

  // Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  failureThreshold?: number;

  /*
GRPC specifies an action involving a GRPC port.
Structure is documented below.
*/
  grpc?: cloudrunv2_ServiceTemplateContainerStartupProbeGrpc;
}

export function cloudrunv2_ServiceTemplateContainerStartupProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "grpc",
      "GRPC specifies an action involving a GRPC port.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateContainerStartupProbeGrpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "httpGet",
      "HTTPGet specifies the http request to perform. Exactly one of HTTPGet or TCPSocket must be specified.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateContainerStartupProbeHttpGet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "initialDelaySeconds",
      "Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "periodSeconds",
      "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tcpSocket",
      "TCPSocket specifies an action involving a TCP port. Exactly one of HTTPGet or TCPSocket must be specified.\nStructure is documented below.",
      cloudrunv2_ServiceTemplateContainerStartupProbeTcpSocket_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutSeconds",
      "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "failureThreshold",
      "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
      [],
      false,
      false,
    ),
  ];
}
