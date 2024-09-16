import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrunv2_getServiceTemplateContainerStartupProbeGrpc,
  cloudrunv2_getServiceTemplateContainerStartupProbeGrpc_GetTypes,
} from './cloudrunv2_getServiceTemplateContainerStartupProbeGrpc';
import {
  cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet,
  cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet_GetTypes,
} from './cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet';
import {
  cloudrunv2_getServiceTemplateContainerStartupProbeTcpSocket,
  cloudrunv2_getServiceTemplateContainerStartupProbeTcpSocket_GetTypes,
} from './cloudrunv2_getServiceTemplateContainerStartupProbeTcpSocket';

export interface cloudrunv2_getServiceTemplateContainerStartupProbe {
  // GRPC specifies an action involving a GRPC port.
  grpcs?: Array<cloudrunv2_getServiceTemplateContainerStartupProbeGrpc>;

  // HTTPGet specifies the http request to perform. Exactly one of HTTPGet or TCPSocket must be specified.
  httpGets?: Array<cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet>;

  // Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  initialDelaySeconds?: number;

  // How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds
  periodSeconds?: number;

  // TCPSocket specifies an action involving a TCP port. Exactly one of HTTPGet or TCPSocket must be specified.
  tcpSockets?: Array<cloudrunv2_getServiceTemplateContainerStartupProbeTcpSocket>;

  // Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  timeoutSeconds?: number;

  // Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  failureThreshold?: number;
}

export function cloudrunv2_getServiceTemplateContainerStartupProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'periodSeconds',
      'How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'tcpSockets',
      'TCPSocket specifies an action involving a TCP port. Exactly one of HTTPGet or TCPSocket must be specified.',
      () =>
        cloudrunv2_getServiceTemplateContainerStartupProbeTcpSocket_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'timeoutSeconds',
      'Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'failureThreshold',
      'Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'grpcs',
      'GRPC specifies an action involving a GRPC port.',
      () => cloudrunv2_getServiceTemplateContainerStartupProbeGrpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'httpGets',
      'HTTPGet specifies the http request to perform. Exactly one of HTTPGet or TCPSocket must be specified.',
      () =>
        cloudrunv2_getServiceTemplateContainerStartupProbeHttpGet_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'initialDelaySeconds',
      'Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes',
      () => [],
      true,
      false,
    ),
  ];
}
