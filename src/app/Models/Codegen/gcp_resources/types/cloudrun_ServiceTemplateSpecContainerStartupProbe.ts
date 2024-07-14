import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudrun_ServiceTemplateSpecContainerStartupProbeGrpc,
  cloudrun_ServiceTemplateSpecContainerStartupProbeGrpc_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerStartupProbeGrpc";
import {
  cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGet,
  cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGet_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGet";
import {
  cloudrun_ServiceTemplateSpecContainerStartupProbeTcpSocket,
  cloudrun_ServiceTemplateSpecContainerStartupProbeTcpSocket_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerStartupProbeTcpSocket";

export interface cloudrun_ServiceTemplateSpecContainerStartupProbe {
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

  /*
GRPC specifies an action involving a GRPC port.
Structure is documented below.
*/
  grpc?: cloudrun_ServiceTemplateSpecContainerStartupProbeGrpc;

  /*
HttpGet specifies the http request to perform.
Structure is documented below.
*/
  httpGet?: cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGet;

  /*
Number of seconds after the container has started before the probe is
initiated.
Defaults to 0 seconds. Minimum value is 0. Maximum value is 240.
*/
  initialDelaySeconds?: number;

  /*
How often (in seconds) to perform the probe.
Default to 10 seconds. Minimum value is 1. Maximum value is 240.
*/
  periodSeconds?: number;

  /*
TcpSocket specifies an action involving a TCP port.
Structure is documented below.
*/
  tcpSocket?: cloudrun_ServiceTemplateSpecContainerStartupProbeTcpSocket;
}

export function cloudrun_ServiceTemplateSpecContainerStartupProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "tcpSocket",
      "TcpSocket specifies an action involving a TCP port.\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerStartupProbeTcpSocket_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutSeconds",
      "Number of seconds after which the probe times out.\nDefaults to 1 second. Minimum value is 1. Maximum value is 3600.\nMust be smaller than periodSeconds.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "failureThreshold",
      "Minimum consecutive failures for the probe to be considered failed after\nhaving succeeded. Defaults to 3. Minimum value is 1.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "grpc",
      "GRPC specifies an action involving a GRPC port.\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerStartupProbeGrpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "httpGet",
      "HttpGet specifies the http request to perform.\nStructure is documented below.",
      cloudrun_ServiceTemplateSpecContainerStartupProbeHttpGet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "initialDelaySeconds",
      "Number of seconds after the container has started before the probe is\ninitiated.\nDefaults to 0 seconds. Minimum value is 0. Maximum value is 240.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "periodSeconds",
      "How often (in seconds) to perform the probe.\nDefault to 10 seconds. Minimum value is 1. Maximum value is 240.",
      [],
      false,
      false,
    ),
  ];
}
