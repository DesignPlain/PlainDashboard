import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_ServiceTemplateSpecContainerStartupProbeGrpc,
  Cloudrun_ServiceTemplateSpecContainerStartupProbeGrpc_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerStartupProbeGrpc";
import {
  Cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGet,
  Cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGet_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGet";
import {
  Cloudrun_ServiceTemplateSpecContainerStartupProbeTcpSocket,
  Cloudrun_ServiceTemplateSpecContainerStartupProbeTcpSocket_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerStartupProbeTcpSocket";

export interface Cloudrun_ServiceTemplateSpecContainerStartupProbe {
  /*
Minimum consecutive failures for the probe to be considered failed after
having succeeded. Defaults to 3. Minimum value is 1.
*/
  FailureThreshold?: number;

  /*
GRPC specifies an action involving a GRPC port.
Structure is documented below.
*/
  Grpc?: Cloudrun_ServiceTemplateSpecContainerStartupProbeGrpc;

  /*
HttpGet specifies the http request to perform.
Structure is documented below.
*/
  HttpGet?: Cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGet;

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

  /*
TcpSocket specifies an action involving a TCP port.
Structure is documented below.
*/
  TcpSocket?: Cloudrun_ServiceTemplateSpecContainerStartupProbeTcpSocket;

  /*
Number of seconds after which the probe times out.
Defaults to 1 second. Minimum value is 1. Maximum value is 3600.
Must be smaller than periodSeconds.
*/
  TimeoutSeconds?: number;
}

export function Cloudrun_ServiceTemplateSpecContainerStartupProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "FailureThreshold",
      "Minimum consecutive failures for the probe to be considered failed after\nhaving succeeded. Defaults to 3. Minimum value is 1.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Grpc",
      "GRPC specifies an action involving a GRPC port.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerStartupProbeGrpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HttpGet",
      "HttpGet specifies the http request to perform.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "InitialDelaySeconds",
      "Number of seconds after the container has started before the probe is\ninitiated.\nDefaults to 0 seconds. Minimum value is 0. Maximum value is 240.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "PeriodSeconds",
      "How often (in seconds) to perform the probe.\nDefault to 10 seconds. Minimum value is 1. Maximum value is 240.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TcpSocket",
      "TcpSocket specifies an action involving a TCP port.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerStartupProbeTcpSocket_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TimeoutSeconds",
      "Number of seconds after which the probe times out.\nDefaults to 1 second. Minimum value is 1. Maximum value is 3600.\nMust be smaller than periodSeconds.",
      [],
      false,
      false,
    ),
  ];
}
