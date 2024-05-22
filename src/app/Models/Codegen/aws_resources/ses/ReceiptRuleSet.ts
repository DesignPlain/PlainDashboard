import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ReceiptRuleSetArgs {
  // Name of the rule set.
  ruleSetName?: string;
}
export class ReceiptRuleSet extends Resource {
  // Name of the rule set.
  public ruleSetName?: string;

  // SES receipt rule set ARN.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ruleSetName",
        "Name of the rule set.",
        [],
        true,
        true,
      ),
    ];
  }
}
