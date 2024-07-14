import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface FirewallRuleArgs {
  /*
The action to take if this rule matches.
Possible values are: `UNSPECIFIED_ACTION`, `ALLOW`, `DENY`.


- - -
*/
  action?: string;

  // An optional string description of this rule.
  description?: string;

  /*
A positive integer that defines the order of rule evaluation.
Rules with the lowest priority are evaluated first.
A default rule at priority Int32.MaxValue matches all IPv4 and
IPv6 traffic when no previous rule matches. Only the action of
this rule can be modified by the user.
*/
  priority?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // IP address or range, defined using CIDR notation, of requests that this rule applies to.
  sourceRange?: string;
}
export class FirewallRule extends Resource {
  /*
The action to take if this rule matches.
Possible values are: `UNSPECIFIED_ACTION`, `ALLOW`, `DENY`.


- - -
*/
  public action?: string;

  // An optional string description of this rule.
  public description?: string;

  /*
A positive integer that defines the order of rule evaluation.
Rules with the lowest priority are evaluated first.
A default rule at priority Int32.MaxValue matches all IPv4 and
IPv6 traffic when no previous rule matches. Only the action of
this rule can be modified by the user.
*/
  public priority?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // IP address or range, defined using CIDR notation, of requests that this rule applies to.
  public sourceRange?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "action",
        "The action to take if this rule matches.\nPossible values are: `UNSPECIFIED_ACTION`, `ALLOW`, `DENY`.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional string description of this rule.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "A positive integer that defines the order of rule evaluation.\nRules with the lowest priority are evaluated first.\nA default rule at priority Int32.MaxValue matches all IPv4 and\nIPv6 traffic when no previous rule matches. Only the action of\nthis rule can be modified by the user.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceRange",
        "IP address or range, defined using CIDR notation, of requests that this rule applies to.",
        [],
        true,
        false,
      ),
    ];
  }
}
