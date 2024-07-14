import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elb_LoadBalancerHealthCheck {
  /*
The target of the check. Valid pattern is "${PROTOCOL}:${PORT}${PATH}", where PROTOCOL
values are:
*/
  target?: string;

  // The length of time before the check times out.
  timeout?: number;

  // The number of checks before the instance is declared unhealthy.
  unhealthyThreshold?: number;

  // The number of checks before the instance is declared healthy.
  healthyThreshold?: number;

  // The interval between checks.
  interval?: number;
}

export function elb_LoadBalancerHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "target",
      'The target of the check. Valid pattern is "${PROTOCOL}:${PORT}${PATH}", where PROTOCOL\nvalues are:',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeout",
      "The length of time before the check times out.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "unhealthyThreshold",
      "The number of checks before the instance is declared unhealthy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "healthyThreshold",
      "The number of checks before the instance is declared healthy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "interval",
      "The interval between checks.",
      [],
      true,
      false,
    ),
  ];
}
