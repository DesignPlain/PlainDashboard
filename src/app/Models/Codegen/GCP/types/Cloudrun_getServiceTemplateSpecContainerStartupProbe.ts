import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceTemplateSpecContainerStartupProbeGrpc,
  Cloudrun_getServiceTemplateSpecContainerStartupProbeGrpc_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerStartupProbeGrpc";
import {
  Cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet,
  Cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet";
import {
  Cloudrun_getServiceTemplateSpecContainerStartupProbeTcpSocket,
  Cloudrun_getServiceTemplateSpecContainerStartupProbeTcpSocket_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerStartupProbeTcpSocket";

export interface Cloudrun_getServiceTemplateSpecContainerStartupProbe {
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

  // TcpSocket specifies an action involving a TCP port.
  TcpSockets?: Array<Cloudrun_getServiceTemplateSpecContainerStartupProbeTcpSocket>;

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
  Grpcs?: Array<Cloudrun_getServiceTemplateSpecContainerStartupProbeGrpc>;

  // HttpGet specifies the http request to perform.
  HttpGets?: Array<Cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet>;
}

export function Cloudrun_getServiceTemplateSpecContainerStartupProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "HttpGets",
      "HttpGet specifies the http request to perform.",
      Cloudrun_getServiceTemplateSpecContainerStartupProbeHttpGet_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "InitialDelaySeconds",
      "Number of seconds after the container has started before the probe is\ninitiated.\nDefaults to 0 seconds. Minimum value is 0. Maximum value is 240.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "PeriodSeconds",
      "How often (in seconds) to perform the probe.\nDefault to 10 seconds. Minimum value is 1. Maximum value is 240.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "TcpSockets",
      "TcpSocket specifies an action involving a TCP port.",
      Cloudrun_getServiceTemplateSpecContainerStartupProbeTcpSocket_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TimeoutSeconds",
      "Number of seconds after which the probe times out.\nDefaults to 1 second. Minimum value is 1. Maximum value is 3600.\nMust be smaller than periodSeconds.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "FailureThreshold",
      "Minimum consecutive failures for the probe to be considered failed after\nhaving succeeded. Defaults to 3. Minimum value is 1.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Grpcs",
      "GRPC specifies an action involving a GRPC port.",
      Cloudrun_getServiceTemplateSpecContainerStartupProbeGrpc_GetTypes(),
      true,
      false,
    ),
  ];
}
