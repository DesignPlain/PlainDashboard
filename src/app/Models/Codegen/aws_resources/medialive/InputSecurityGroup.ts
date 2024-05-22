import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_InputSecurityGroupWhitelistRule,
  medialive_InputSecurityGroupWhitelistRule_GetTypes,
} from "../types/medialive_InputSecurityGroupWhitelistRule";

export interface InputSecurityGroupArgs {
  // A map of tags to assign to the InputSecurityGroup. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Whitelist rules. See Whitelist Rules for more details.

The following arguments are optional:
*/
  whitelistRules?: Array<medialive_InputSecurityGroupWhitelistRule>;
}
export class InputSecurityGroup extends Resource {
  // ARN of the InputSecurityGroup.
  public arn?: string;

  // The list of inputs currently using this InputSecurityGroup.
  public inputs?: Array<string>;

  // A map of tags to assign to the InputSecurityGroup. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  /*
Whitelist rules. See Whitelist Rules for more details.

The following arguments are optional:
*/
  public whitelistRules?: Array<medialive_InputSecurityGroupWhitelistRule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the InputSecurityGroup. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "whitelistRules",
        "Whitelist rules. See Whitelist Rules for more details.\n\nThe following arguments are optional:",
        medialive_InputSecurityGroupWhitelistRule_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
