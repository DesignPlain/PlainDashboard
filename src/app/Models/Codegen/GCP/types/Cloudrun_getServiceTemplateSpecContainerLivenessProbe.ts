import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceTemplateSpecContainerLivenessProbeGrpc,
  Cloudrun_getServiceTemplateSpecContainerLivenessProbeGrpc_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerLivenessProbeGrpc";
import {
  Cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGet,
  Cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGet_GetTypes,
} from "./Cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGet";

export interface Cloudrun_getServiceTemplateSpecContainerLivenessProbe {
  /*
Minimum consecutive failures for the probe to be considered failed after
having succeeded. Defaults to 3. Minimum value is 1.
*/
  FailureThreshold?: number;

  // GRPC specifies an action involving a GRPC port.
  Grpcs?: Array<Cloudrun_getServiceTemplateSpecContainerLivenessProbeGrpc>;

  // HttpGet specifies the http request to perform.
  HttpGets?: Array<Cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGet>;

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
}

export function Cloudrun_getServiceTemplateSpecContainerLivenessProbe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "InitialDelaySeconds",
      "Number of seconds after the container has started before the probe is\ninitiated.\nDefaults to 0 seconds. Minimum value is 0. Maximum value is 3600.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "PeriodSeconds",
      "How often (in seconds) to perform the probe.\nDefault to 10 seconds. Minimum value is 1. Maximum value is 3600.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "TimeoutSeconds",
      "Number of seconds after which the probe times out.\nDefaults to 1 second. Minimum value is 1. Maximum value is 3600.\nMust be smaller than period_seconds.",
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
      Cloudrun_getServiceTemplateSpecContainerLivenessProbeGrpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HttpGets",
      "HttpGet specifies the http request to perform.",
      Cloudrun_getServiceTemplateSpecContainerLivenessProbeHttpGet_GetTypes(),
      true,
      false,
    ),
  ];
}
