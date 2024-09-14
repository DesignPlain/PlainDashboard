import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface route53_ResolverRuleTargetIp {
  // One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.
  ip?: string;

  // The port at `ip` that you want to forward DNS queries to. Default value is `53`.
  port?: number;

  // The protocol for the resolver endpoint. Valid values can be found in the [AWS documentation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_TargetAddress.html). Default value is `Do53`.
  protocol?: string;
}

export function route53_ResolverRuleTargetIp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ip",
      "One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port at `ip` that you want to forward DNS queries to. Default value is `53`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "The protocol for the resolver endpoint. Valid values can be found in the [AWS documentation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_TargetAddress.html). Default value is `Do53`.",
      () => [],
      false,
      false,
    ),
  ];
}
