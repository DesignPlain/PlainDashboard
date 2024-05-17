import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_ServiceTemplateSpecContainerLivenessProbeGrpc,
  Cloudrun_ServiceTemplateSpecContainerLivenessProbeGrpc_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerLivenessProbeGrpc";
import {
  Cloudrun_ServiceTemplateSpecContainerLivenessProbeHttpGet,
  Cloudrun_ServiceTemplateSpecContainerLivenessProbeHttpGet_GetTypes,
} from "./Cloudrun_ServiceTemplateSpecContainerLivenessProbeHttpGet";

export interface Cloudrun_ServiceTemplateSpecContainerLivenessProbe {
  /*
Number of seconds after the container has started before the probe is
initiated.
Defaults to 0 seconds. Minimum value is 0. Maximum value is 3600.
*/
  InitialDelaySeconds?: number;

  /*
How often (in seconds) to perform the probe.
Default to 10 seconds. Minimum value is 1. Maximum value is 3600.
*/
  PeriodSeconds?: number;

  /*
Number of seconds after which the probe times out.
Defaults to 1 second. Minimum value is 1. Maximum value is 3600.
Must be smaller than period_seconds.
*/
  TimeoutSeconds?: number;

  /*
Minimum consecutive failures for the probe to be considered failed after
having succeeded. Defaults to 3. Minimum value is 1.
*/
  FailureThreshold?: number;

  /*
GRPC specifies an action involving a GRPC port.
Structure is documented below.
*/
  Grpc?: Cloudrun_ServiceTemplateSpecContainerLivenessProbeGrpc;

  /*
HttpGet specifies the http request to perform.
Structure is documented below.
*/
  HttpGet?: Cloudrun_ServiceTemplateSpecContainerLivenessProbeHttpGet;
}

export function Cloudrun_ServiceTemplateSpecContainerLivenessProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Grpc",
      "GRPC specifies an action involving a GRPC port.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerLivenessProbeGrpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HttpGet",
      "HttpGet specifies the http request to perform.\nStructure is documented below.",
      Cloudrun_ServiceTemplateSpecContainerLivenessProbeHttpGet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "InitialDelaySeconds",
      "Number of seconds after the container has started before the probe is\ninitiated.\nDefaults to 0 seconds. Minimum value is 0. Maximum value is 3600.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "PeriodSeconds",
      "How often (in seconds) to perform the probe.\nDefault to 10 seconds. Minimum value is 1. Maximum value is 3600.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TimeoutSeconds",
      "Number of seconds after which the probe times out.\nDefaults to 1 second. Minimum value is 1. Maximum value is 3600.\nMust be smaller than period_seconds.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "FailureThreshold",
      "Minimum consecutive failures for the probe to be considered failed after\nhaving succeeded. Defaults to 3. Minimum value is 1.",
      [],
      false,
      false,
    ),
  ];
}
