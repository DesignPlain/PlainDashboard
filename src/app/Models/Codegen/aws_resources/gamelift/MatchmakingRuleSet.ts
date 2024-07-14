import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface MatchmakingRuleSetArgs {
  // JSON encoded string containing rule set data.
  ruleSetBody?: string;

  //
  tags?: Map<string, string>;

  // Name of the matchmaking rule set.
  name?: string;
}
export class MatchmakingRuleSet extends Resource {
  // Rule Set ARN.
  public arn?: string;

  // Name of the matchmaking rule set.
  public name?: string;

  // JSON encoded string containing rule set data.
  public ruleSetBody?: string;

  //
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ruleSetBody",
        "JSON encoded string containing rule set data.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the matchmaking rule set.",
        [],
        false,
        true,
      ),
    ];
  }
}
