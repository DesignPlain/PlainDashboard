import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getServiceTemplateContainerLivenessProbeGrpc,
  Cloudrunv2_getServiceTemplateContainerLivenessProbeGrpc_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerLivenessProbeGrpc";
import {
  Cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet,
  Cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet";
import {
  Cloudrunv2_getServiceTemplateContainerLivenessProbeTcpSocket,
  Cloudrunv2_getServiceTemplateContainerLivenessProbeTcpSocket_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerLivenessProbeTcpSocket";

export interface Cloudrunv2_getServiceTemplateContainerLivenessProbe {
  // Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  FailureThreshold?: number;

  // GRPC specifies an action involving a GRPC port.
  Grpcs?: Array<Cloudrunv2_getServiceTemplateContainerLivenessProbeGrpc>;

  // HTTPGet specifies the http request to perform.
  HttpGets?: Array<Cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet>;

  // Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  InitialDelaySeconds?: number;

  // How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds
  PeriodSeconds?: number;

  // TCPSocketAction describes an action based on opening a socket
  TcpSockets?: Array<Cloudrunv2_getServiceTemplateContainerLivenessProbeTcpSocket>;

  // Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  TimeoutSeconds?: number;
}

export function Cloudrunv2_getServiceTemplateContainerLivenessProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Grpcs",
      "GRPC specifies an action involving a GRPC port.",
      Cloudrunv2_getServiceTemplateContainerLivenessProbeGrpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HttpGets",
      "HTTPGet specifies the http request to perform.",
      Cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet_GetTypes(),
      true,
      false,
    ),
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
      "TCPSocketAction describes an action based on opening a socket",
      Cloudrunv2_getServiceTemplateContainerLivenessProbeTcpSocket_GetTypes(),
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
  ];
}
