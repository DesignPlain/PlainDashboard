import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface FirewallRuleArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // IP address or range, defined using CIDR notation, of requests that this rule applies to.
  sourceRange?: string;

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
}
export class FirewallRule extends DS_Resource {
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

  /*
The action to take if this rule matches.
Possible values are: `UNSPECIFIED_ACTION`, `ALLOW`, `DENY`.


- - -
*/
  public action?: string;

  // An optional string description of this rule.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "action",
        "The action to take if this rule matches.\nPossible values are: `UNSPECIFIED_ACTION`, `ALLOW`, `DENY`.\n\n\n- - -",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional string description of this rule.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "A positive integer that defines the order of rule evaluation.\nRules with the lowest priority are evaluated first.\nA default rule at priority Int32.MaxValue matches all IPv4 and\nIPv6 traffic when no previous rule matches. Only the action of\nthis rule can be modified by the user.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceRange",
        "IP address or range, defined using CIDR notation, of requests that this rule applies to.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
