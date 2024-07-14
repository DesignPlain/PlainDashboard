import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface route53_ResolverRuleTargetIp {
  // One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.
  ip?: string;

  // The port at `ip` that you want to forward DNS queries to. Default value is `53`
  port?: number;

  //
  protocol?: string;
}

export function route53_ResolverRuleTargetIp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ip",
      "One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port at `ip` that you want to forward DNS queries to. Default value is `53`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", [], false, false),
  ];
}
