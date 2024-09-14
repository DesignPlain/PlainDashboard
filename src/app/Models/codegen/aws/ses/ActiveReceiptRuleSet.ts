import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ActiveReceiptRuleSetArgs {
  // The name of the rule set
  ruleSetName?: string;
}
export class ActiveReceiptRuleSet extends DS_Resource {
  // The SES receipt rule set ARN.
  public arn?: string;

  // The name of the rule set
  public ruleSetName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ruleSetName",
        "The name of the rule set",
        () => [],
        true,
        false,
      ),
    ];
  }
}
