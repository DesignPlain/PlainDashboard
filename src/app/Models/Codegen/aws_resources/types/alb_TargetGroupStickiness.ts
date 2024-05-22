import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alb_TargetGroupStickiness {
  // Only used when the type is `lb_cookie`. The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).
  cookieDuration?: number;

  // Name of the application based cookie. AWSALB, AWSALBAPP, and AWSALBTG prefixes are reserved and cannot be used. Only needed when type is `app_cookie`.
  cookieName?: string;

  // Boolean to enable / disable `stickiness`. Default is `true`.
  enabled?: boolean;

  // The type of sticky sessions. The only current possible values are `lb_cookie`, `app_cookie` for ALBs, `source_ip` for NLBs, and `source_ip_dest_ip`, `source_ip_dest_ip_proto` for GWLBs.
  type?: string;
}

export function alb_TargetGroupStickiness_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "cookieDuration",
      "Only used when the type is `lb_cookie`. The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cookieName",
      "Name of the application based cookie. AWSALB, AWSALBAPP, and AWSALBTG prefixes are reserved and cannot be used. Only needed when type is `app_cookie`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Boolean to enable / disable `stickiness`. Default is `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of sticky sessions. The only current possible values are `lb_cookie`, `app_cookie` for ALBs, `source_ip` for NLBs, and `source_ip_dest_ip`, `source_ip_dest_ip_proto` for GWLBs.",
      [],
      true,
      false,
    ),
  ];
}
