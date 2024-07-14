import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface route53_getResolverFirewallRulesFirewallRule {
  // The custom DNS record to send back in response to the query.
  blockOverrideDomain?: string;

  // The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record.
  blockOverrideTtl?: number;

  // The unique identifier of the firewall rule group that you want to retrieve the rules for.
  firewallRuleGroupId?: string;

  // The date and time that the rule was last modified, in Unix time format and Coordinated Universal Time (UTC).
  modificationTime?: string;

  // The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list.
  action?: string;

  // The DNS record's type.
  blockOverrideDnsType?: string;

  // The way that you want DNS Firewall to block the request.
  blockResponse?: string;

  // The date and time that the rule was created, in Unix time format and Coordinated Universal Time (UTC).
  creationTime?: string;

  // A unique string defined by you to identify the request.
  creatorRequestId?: string;

  // The ID of the domain list that's used in the rule.
  firewallDomainListId?: string;

  // The name of the rule.
  name?: string;

  // The setting that determines the processing order of the rules in a rule group.
  priority?: number;
}

export function route53_getResolverFirewallRulesFirewallRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "firewallRuleGroupId",
      "The unique identifier of the firewall rule group that you want to retrieve the rules for.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "action",
      "The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "creatorRequestId",
      "A unique string defined by you to identify the request.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "blockResponse",
      "The way that you want DNS Firewall to block the request.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "creationTime",
      "The date and time that the rule was created, in Unix time format and Coordinated Universal Time (UTC).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "firewallDomainListId",
      "The ID of the domain list that's used in the rule.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the rule.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "blockOverrideDomain",
      "The custom DNS record to send back in response to the query.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "blockOverrideTtl",
      "The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "modificationTime",
      "The date and time that the rule was last modified, in Unix time format and Coordinated Universal Time (UTC).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "blockOverrideDnsType",
      "The DNS record's type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "The setting that determines the processing order of the rules in a rule group.",
      [],
      true,
      false,
    ),
  ];
}
