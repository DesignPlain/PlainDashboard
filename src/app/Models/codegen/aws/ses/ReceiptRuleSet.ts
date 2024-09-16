import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ReceiptRuleSetArgs {
  // Name of the rule set.
  ruleSetName?: string;
}
export class ReceiptRuleSet extends DS_Resource {
  // Name of the rule set.
  public ruleSetName?: string;

  // SES receipt rule set ARN.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'ruleSetName',
        'Name of the rule set.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
