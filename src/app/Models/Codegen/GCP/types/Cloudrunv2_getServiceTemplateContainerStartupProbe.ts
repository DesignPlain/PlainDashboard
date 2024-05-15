import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getServiceTemplateContainerStartupProbeGrpc,
  Cloudrunv2_getServiceTemplateContainerStartupProbeGrpc_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerStartupProbeGrpc";
import {
  Cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet,
  Cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet";
import {
  Cloudrunv2_getServiceTemplateContainerStartupProbeTcpSocket,
  Cloudrunv2_getServiceTemplateContainerStartupProbeTcpSocket_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerStartupProbeTcpSocket";

export interface Cloudrunv2_getServiceTemplateContainerStartupProbe {
  // Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  TimeoutSeconds?: number;

  // Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  FailureThreshold?: number;

  // GRPC specifies an action involving a GRPC port.
  Grpcs?: Array<Cloudrunv2_getServiceTemplateContainerStartupProbeGrpc>;

  // HTTPGet specifies the http request to perform. Exactly one of HTTPGet or TCPSocket must be specified.
  HttpGets?: Array<Cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet>;

  // Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  InitialDelaySeconds?: number;

  // How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds
  PeriodSeconds?: number;

  // TCPSocket specifies an action involving a TCP port. Exactly one of HTTPGet or TCPSocket must be specified.
  TcpSockets?: Array<Cloudrunv2_getServiceTemplateContainerStartupProbeTcpSocket>;
}

export function Cloudrunv2_getServiceTemplateContainerStartupProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "InitialDelaySeconds",
      "Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "PeriodSeconds",
      "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "TcpSockets",
      "TCPSocket specifies an action involving a TCP port. Exactly one of HTTPGet or TCPSocket must be specified.",
      Cloudrunv2_getServiceTemplateContainerStartupProbeTcpSocket_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TimeoutSeconds",
      "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "FailureThreshold",
      "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Grpcs",
      "GRPC specifies an action involving a GRPC port.",
      Cloudrunv2_getServiceTemplateContainerStartupProbeGrpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HttpGets",
      "HTTPGet specifies the http request to perform. Exactly one of HTTPGet or TCPSocket must be specified.",
      Cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet_GetTypes(),
      true,
      false,
    ),
  ];
}
