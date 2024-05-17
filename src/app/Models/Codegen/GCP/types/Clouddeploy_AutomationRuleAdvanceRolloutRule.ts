import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddeploy_AutomationRuleAdvanceRolloutRule {
  // Optional. How long to wait after a rollout is finished.
  Wait?: string;

  // Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`.
  Id?: string;

  /*
Optional. Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^a-z?$`.

- - -
*/
  SourcePhases?: Array<string>;
}

export function Clouddeploy_AutomationRuleAdvanceRolloutRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Wait",
      "Optional. How long to wait after a rollout is finished.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SourcePhases",
      "Optional. Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^a-z?$`.\n\n- - -",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
