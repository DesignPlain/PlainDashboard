import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrun_getServiceTemplateSpecContainerStartupProbeTcpSocket,
  cloudrun_getServiceTemplateSpecContainerStartupProbeTcpSocket_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerStartupProbeTcpSocket";
import {
  cloudrun_getServiceTemplateSpecContainerStartupProbeGrpc,
  cloudrun_getServiceTemplateSpecContainerStartupProbeGrpc_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerStartupProbeGrpc";
import {
  cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet,
  cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet_GetTypes,
} from "./cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet";

export interface cloudrun_getServiceTemplateSpecContainerStartupProbe {
  /*
How often (in seconds) to perform the probe.
Default to 10 seconds. Minimum value is 1. Maximum value is 240.
*/
  periodSeconds?: number;

  // TcpSocket specifies an action involving a TCP port.
  tcpSockets?: Array<cloudrun_getServiceTemplateSpecContainerStartupProbeTcpSocket>;

  /*
Number of seconds after which the probe times out.
Defaults to 1 second. Minimum value is 1. Maximum value is 3600.
Must be smaller than periodSeconds.
*/
  timeoutSeconds?: number;

  /*
Minimum consecutive failures for the probe to be considered failed after
having succeeded. Defaults to 3. Minimum value is 1.
*/
  failureThreshold?: number;

  // GRPC specifies an action involving a GRPC port.
  grpcs?: Array<cloudrun_getServiceTemplateSpecContainerStartupProbeGrpc>;

  // HttpGet specifies the http request to perform.
  httpGets?: Array<cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet>;

  /*
Number of seconds after the container has started before the probe is
initiated.
Defaults to 0 seconds. Minimum value is 0. Maximum value is 240.
*/
  initialDelaySeconds?: number;
}

export function cloudrun_getServiceTemplateSpecContainerStartupProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "httpGets",
      "HttpGet specifies the http request to perform.",
      cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "initialDelaySeconds",
      "Number of seconds after the container has started before the probe is\ninitiated.\nDefaults to 0 seconds. Minimum value is 0. Maximum value is 240.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "periodSeconds",
      "How often (in seconds) to perform the probe.\nDefault to 10 seconds. Minimum value is 1. Maximum value is 240.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tcpSockets",
      "TcpSocket specifies an action involving a TCP port.",
      cloudrun_getServiceTemplateSpecContainerStartupProbeTcpSocket_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutSeconds",
      "Number of seconds after which the probe times out.\nDefaults to 1 second. Minimum value is 1. Maximum value is 3600.\nMust be smaller than periodSeconds.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "failureThreshold",
      "Minimum consecutive failures for the probe to be considered failed after\nhaving succeeded. Defaults to 3. Minimum value is 1.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "grpcs",
      "GRPC specifies an action involving a GRPC port.",
      cloudrun_getServiceTemplateSpecContainerStartupProbeGrpc_GetTypes(),
      true,
      false,
    ),
  ];
}
