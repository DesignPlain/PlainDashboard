import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  route53_ResolverRuleTargetIp,
  route53_ResolverRuleTargetIp_GetTypes,
} from "../types/route53_ResolverRuleTargetIp";

export interface ResolverRuleArgs {
  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Configuration block(s) indicating the IPs that you want Resolver to forward DNS queries to (documented below).
This argument should only be specified for `FORWARD` type rules.
*/
  targetIps?: Array<route53_ResolverRuleTargetIp>;

  // DNS queries for this domain name are forwarded to the IP addresses that are specified using `target_ip`.
  domainName?: string;

  // A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.
  name?: string;

  /*
The ID of the outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify using `target_ip`.
This argument should only be specified for `FORWARD` type rules.
*/
  resolverEndpointId?: string;

  // The rule type. Valid values are `FORWARD`, `SYSTEM` and `RECURSIVE`.
  ruleType?: string;
}
export class ResolverRule extends Resource {
  // The rule type. Valid values are `FORWARD`, `SYSTEM` and `RECURSIVE`.
  public ruleType?: string;

  /*
Configuration block(s) indicating the IPs that you want Resolver to forward DNS queries to (documented below).
This argument should only be specified for `FORWARD` type rules.
*/
  public targetIps?: Array<route53_ResolverRuleTargetIp>;

  // A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.
  public name?: string;

  // When a rule is shared with another AWS account, the account ID of the account that the rule is shared with.
  public ownerId?: string;

  /*
The ID of the outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify using `target_ip`.
This argument should only be specified for `FORWARD` type rules.
*/
  public resolverEndpointId?: string;

  /*
Whether the rules is shared and, if so, whether the current account is sharing the rule with another account, or another account is sharing the rule with the current account.
Values are `NOT_SHARED`, `SHARED_BY_ME` or `SHARED_WITH_ME`
*/
  public shareStatus?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN (Amazon Resource Name) for the resolver rule.
  public arn?: string;

  // DNS queries for this domain name are forwarded to the IP addresses that are specified using `target_ip`.
  public domainName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ruleType",
        "The rule type. Valid values are `FORWARD`, `SYSTEM` and `RECURSIVE`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetIps",
        "Configuration block(s) indicating the IPs that you want Resolver to forward DNS queries to (documented below).\nThis argument should only be specified for `FORWARD` type rules.",
        route53_ResolverRuleTargetIp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "DNS queries for this domain name are forwarded to the IP addresses that are specified using `target_ip`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resolverEndpointId",
        "The ID of the outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify using `target_ip`.\nThis argument should only be specified for `FORWARD` type rules.",
        [],
        false,
        false,
      ),
    ];
  }
}
