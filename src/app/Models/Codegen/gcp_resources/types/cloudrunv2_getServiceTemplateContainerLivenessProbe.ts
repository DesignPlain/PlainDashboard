import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudrunv2_getServiceTemplateContainerLivenessProbeTcpSocket,
  cloudrunv2_getServiceTemplateContainerLivenessProbeTcpSocket_GetTypes,
} from "./cloudrunv2_getServiceTemplateContainerLivenessProbeTcpSocket";
import {
  cloudrunv2_getServiceTemplateContainerLivenessProbeGrpc,
  cloudrunv2_getServiceTemplateContainerLivenessProbeGrpc_GetTypes,
} from "./cloudrunv2_getServiceTemplateContainerLivenessProbeGrpc";
import {
  cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet,
  cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet_GetTypes,
} from "./cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet";

export interface cloudrunv2_getServiceTemplateContainerLivenessProbe {
  // Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  initialDelaySeconds?: number;

  // How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds
  periodSeconds?: number;

  // TCPSocketAction describes an action based on opening a socket
  tcpSockets?: Array<cloudrunv2_getServiceTemplateContainerLivenessProbeTcpSocket>;

  // Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  timeoutSeconds?: number;

  // Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  failureThreshold?: number;

  // GRPC specifies an action involving a GRPC port.
  grpcs?: Array<cloudrunv2_getServiceTemplateContainerLivenessProbeGrpc>;

  // HTTPGet specifies the http request to perform.
  httpGets?: Array<cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet>;
}

export function cloudrunv2_getServiceTemplateContainerLivenessProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "timeoutSeconds",
      "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "failureThreshold",
      "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "grpcs",
      "GRPC specifies an action involving a GRPC port.",
      cloudrunv2_getServiceTemplateContainerLivenessProbeGrpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "httpGets",
      "HTTPGet specifies the http request to perform.",
      cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "initialDelaySeconds",
      "Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "periodSeconds",
      "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tcpSockets",
      "TCPSocketAction describes an action based on opening a socket",
      cloudrunv2_getServiceTemplateContainerLivenessProbeTcpSocket_GetTypes(),
      true,
      false,
    ),
  ];
}
