import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ResolverFirewallRuleArgs {
  // Evaluate DNS redirection in the DNS redirection chain, such as CNAME, DNAME, ot ALIAS. Valid values are `INSPECT_REDIRECTION_DOMAIN` and `TRUST_REDIRECTION_DOMAIN`. Default value is `INSPECT_REDIRECTION_DOMAIN`.
  firewallDomainRedirectionAction?: string;

  // The unique identifier of the firewall rule group where you want to create the rule.
  firewallRuleGroupId?: string;

  // A name that lets you identify the rule, to manage and use it.
  name?: string;

  // The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.
  priority?: number;

  // The query type you want the rule to evaluate. Additional details can be found [here](https://en.wikipedia.org/wiki/List_of_DNS_record_types)
  qType?: string;

  // The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Minimum value of 0. Maximum value of 604800.
  blockOverrideTtl?: number;

  // The way that you want DNS Firewall to block the request. Valid values: `NODATA`, `NXDOMAIN`, `OVERRIDE`.
  blockResponse?: string;

  // The custom DNS record to send back in response to the query.
  blockOverrideDomain?: string;

  // The ID of the domain list that you want to use in the rule.
  firewallDomainListId?: string;

  // The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list. Valid values: `ALLOW`, `BLOCK`, `ALERT`.
  action?: string;

  // The DNS record's type. This determines the format of the record value that you provided in BlockOverrideDomain. Value values: `CNAME`.
  blockOverrideDnsType?: string;
}
export class ResolverFirewallRule extends DS_Resource {
  // A name that lets you identify the rule, to manage and use it.
  public name?: string;

  // The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.
  public priority?: number;

  // The query type you want the rule to evaluate. Additional details can be found [here](https://en.wikipedia.org/wiki/List_of_DNS_record_types)
  public qType?: string;

  // The ID of the domain list that you want to use in the rule.
  public firewallDomainListId?: string;

  // The unique identifier of the firewall rule group where you want to create the rule.
  public firewallRuleGroupId?: string;

  // The custom DNS record to send back in response to the query.
  public blockOverrideDomain?: string;

  // The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Minimum value of 0. Maximum value of 604800.
  public blockOverrideTtl?: number;

  // The way that you want DNS Firewall to block the request. Valid values: `NODATA`, `NXDOMAIN`, `OVERRIDE`.
  public blockResponse?: string;

  // Evaluate DNS redirection in the DNS redirection chain, such as CNAME, DNAME, ot ALIAS. Valid values are `INSPECT_REDIRECTION_DOMAIN` and `TRUST_REDIRECTION_DOMAIN`. Default value is `INSPECT_REDIRECTION_DOMAIN`.
  public firewallDomainRedirectionAction?: string;

  // The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list. Valid values: `ALLOW`, `BLOCK`, `ALERT`.
  public action?: string;

  // The DNS record's type. This determines the format of the record value that you provided in BlockOverrideDomain. Value values: `CNAME`.
  public blockOverrideDnsType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'blockOverrideDnsType',
        "The DNS record's type. This determines the format of the record value that you provided in BlockOverrideDomain. Value values: `CNAME`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'priority',
        'The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'blockResponse',
        'The way that you want DNS Firewall to block the request. Valid values: `NODATA`, `NXDOMAIN`, `OVERRIDE`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'firewallDomainListId',
        'The ID of the domain list that you want to use in the rule.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'action',
        "The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list. Valid values: `ALLOW`, `BLOCK`, `ALERT`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'blockOverrideTtl',
        'The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Minimum value of 0. Maximum value of 604800.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'blockOverrideDomain',
        'The custom DNS record to send back in response to the query.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'firewallDomainRedirectionAction',
        'Evaluate DNS redirection in the DNS redirection chain, such as CNAME, DNAME, ot ALIAS. Valid values are `INSPECT_REDIRECTION_DOMAIN` and `TRUST_REDIRECTION_DOMAIN`. Default value is `INSPECT_REDIRECTION_DOMAIN`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'firewallRuleGroupId',
        'The unique identifier of the firewall rule group where you want to create the rule.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'A name that lets you identify the rule, to manage and use it.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'qType',
        'The query type you want the rule to evaluate. Additional details can be found [here](https://en.wikipedia.org/wiki/List_of_DNS_record_types)',
        () => [],
        false,
        false,
      ),
    ];
  }
}
