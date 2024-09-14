import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  vpclattice_ListenerRuleAction,
  vpclattice_ListenerRuleAction_GetTypes,
} from "../types/vpclattice_ListenerRuleAction";
import {
  vpclattice_ListenerRuleMatch,
  vpclattice_ListenerRuleMatch_GetTypes,
} from "../types/vpclattice_ListenerRuleMatch";

export interface ListenerRuleArgs {
  // The name of the rule. The name must be unique within the listener. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
  name?: string;

  /*
The priority assigned to the rule. Each rule for a specific listener must have a unique priority. The lower the priority number the higher the priority.

The following arguments are optional:
*/
  priority?: number;

  // The ID or Amazon Resource Identifier (ARN) of the service.
  serviceIdentifier?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The action for the listener rule.
  action?: vpclattice_ListenerRuleAction;

  // The ID or Amazon Resource Name (ARN) of the listener.
  listenerIdentifier?: string;

  // The rule match.
  match?: vpclattice_ListenerRuleMatch;
}
export class ListenerRule extends DS_Resource {
  // The action for the listener rule.
  public action?: vpclattice_ListenerRuleAction;

  // The ARN for the listener rule.
  public arn?: string;

  // Unique identifier for the listener rule.
  public ruleId?: string;

  // The ID or Amazon Resource Identifier (ARN) of the service.
  public serviceIdentifier?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ID or Amazon Resource Name (ARN) of the listener.
  public listenerIdentifier?: string;

  // The rule match.
  public match?: vpclattice_ListenerRuleMatch;

  // The name of the rule. The name must be unique within the listener. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
  public name?: string;

  /*
The priority assigned to the rule. Each rule for a specific listener must have a unique priority. The lower the priority number the higher the priority.

The following arguments are optional:
*/
  public priority?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "The priority assigned to the rule. Each rule for a specific listener must have a unique priority. The lower the priority number the higher the priority.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceIdentifier",
        "The ID or Amazon Resource Identifier (ARN) of the service.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "action",
        "The action for the listener rule.",
        () => vpclattice_ListenerRuleAction_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "listenerIdentifier",
        "The ID or Amazon Resource Name (ARN) of the listener.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "match",
        "The rule match.",
        () => vpclattice_ListenerRuleMatch_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the rule. The name must be unique within the listener. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
