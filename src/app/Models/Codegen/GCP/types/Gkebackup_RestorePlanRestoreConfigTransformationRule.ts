import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction,
  gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction_GetTypes,
} from "./gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction";
import {
  gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilter,
  gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilter_GetTypes,
} from "./gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilter";

export interface gkebackup_RestorePlanRestoreConfigTransformationRule {
  /*
The description is a user specified string description
of the transformation rule.
*/
  description?: string;

  /*
A list of transformation rule actions to take against candidate
resources. Actions are executed in order defined - this order
matters, as they could potentially interfere with each other and
the first operation could affect the outcome of the second operation.
Structure is documented below.
*/
  fieldActions?: Array<gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction>;

  /*
This field is used to specify a set of fields that should be used to
determine which resources in backup should be acted upon by the
supplied transformation rule actions, and this will ensure that only
specific resources are affected by transformation rule actions.
Structure is documented below.
*/
  resourceFilter?: gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilter;
}

export function gkebackup_RestorePlanRestoreConfigTransformationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "resourceFilter",
      "This field is used to specify a set of fields that should be used to\ndetermine which resources in backup should be acted upon by the\nsupplied transformation rule actions, and this will ensure that only\nspecific resources are affected by transformation rule actions.\nStructure is documented below.",
      gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "The description is a user specified string description\nof the transformation rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fieldActions",
      "A list of transformation rule actions to take against candidate\nresources. Actions are executed in order defined - this order\nmatters, as they could potentially interfere with each other and\nthe first operation could affect the outcome of the second operation.\nStructure is documented below.",
      gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction_GetTypes(),
      true,
      false,
    ),
  ];
}
