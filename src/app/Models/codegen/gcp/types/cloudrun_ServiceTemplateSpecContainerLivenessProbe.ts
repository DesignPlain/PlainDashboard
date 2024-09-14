import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudrun_ServiceTemplateSpecContainerLivenessProbeGrpc,
  cloudrun_ServiceTemplateSpecContainerLivenessProbeGrpc_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerLivenessProbeGrpc";
import {
  cloudrun_ServiceTemplateSpecContainerLivenessProbeHttpGet,
  cloudrun_ServiceTemplateSpecContainerLivenessProbeHttpGet_GetTypes,
} from "./cloudrun_ServiceTemplateSpecContainerLivenessProbeHttpGet";

export interface cloudrun_ServiceTemplateSpecContainerLivenessProbe {
  /*
Minimum consecutive failures for the probe to be considered failed after
having succeeded. Defaults to 3. Minimum value is 1.
*/
  failureThreshold?: number;

  /*
GRPC specifies an action involving a GRPC port.
Structure is documented below.
*/
  grpc?: cloudrun_ServiceTemplateSpecContainerLivenessProbeGrpc;

  /*
HttpGet specifies the http request to perform.
Structure is documented below.
*/
  httpGet?: cloudrun_ServiceTemplateSpecContainerLivenessProbeHttpGet;

  /*
Number of seconds after the container has started before the probe is
initiated.
Defaults to 0 seconds. Minimum value is 0. Maximum value is 3600.
*/
  initialDelaySeconds?: number;

  /*
How often (in seconds) to perform the probe.
Default to 10 seconds. Minimum value is 1. Maximum value is 3600.
*/
  periodSeconds?: number;

  /*
Number of seconds after which the probe times out.
Defaults to 1 second. Minimum value is 1. Maximum value is 3600.
Must be smaller than period_seconds.
*/
  timeoutSeconds?: number;
}

export function cloudrun_ServiceTemplateSpecContainerLivenessProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "periodSeconds",
      "How often (in seconds) to perform the probe.\nDefault to 10 seconds. Minimum value is 1. Maximum value is 3600.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutSeconds",
      "Number of seconds after which the probe times out.\nDefaults to 1 second. Minimum value is 1. Maximum value is 3600.\nMust be smaller than period_seconds.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "failureThreshold",
      "Minimum consecutive failures for the probe to be considered failed after\nhaving succeeded. Defaults to 3. Minimum value is 1.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "grpc",
      "GRPC specifies an action involving a GRPC port.\nStructure is documented below.",
      () => cloudrun_ServiceTemplateSpecContainerLivenessProbeGrpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "httpGet",
      "HttpGet specifies the http request to perform.\nStructure is documented below.",
      () =>
        cloudrun_ServiceTemplateSpecContainerLivenessProbeHttpGet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "initialDelaySeconds",
      "Number of seconds after the container has started before the probe is\ninitiated.\nDefaults to 0 seconds. Minimum value is 0. Maximum value is 3600.",
      () => [],
      false,
      false,
    ),
  ];
}
