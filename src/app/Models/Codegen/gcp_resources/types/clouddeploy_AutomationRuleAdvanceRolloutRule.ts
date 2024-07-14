import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface clouddeploy_AutomationRuleAdvanceRolloutRule {
  // Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`.
  id?: string;

  /*
Optional. Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^a-z?$`.

- - -
*/
  sourcePhases?: Array<string>;

  // Optional. How long to wait after a rollout is finished.
  wait?: string;
}

export function clouddeploy_AutomationRuleAdvanceRolloutRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourcePhases",
      "Optional. Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^a-z?$`.\n\n- - -",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "wait",
      "Optional. How long to wait after a rollout is finished.",
      [],
      false,
      false,
    ),
  ];
}
