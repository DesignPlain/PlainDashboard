import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilter,
  Gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilter_GetTypes,
} from "./Gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilter";
import {
  Gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction,
  Gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction_GetTypes,
} from "./Gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction";

export interface Gkebackup_RestorePlanRestoreConfigTransformationRule {
  /*
The description is a user specified string description
of the transformation rule.
*/
  Description?: string;

  /*
A list of transformation rule actions to take against candidate
resources. Actions are executed in order defined - this order
matters, as they could potentially interfere with each other and
the first operation could affect the outcome of the second operation.
Structure is documented below.
*/
  FieldActions?: Array<Gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction>;

  /*
This field is used to specify a set of fields that should be used to
determine which resources in backup should be acted upon by the
supplied transformation rule actions, and this will ensure that only
specific resources are affected by transformation rule actions.
Structure is documented below.
*/
  ResourceFilter?: Gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilter;
}

export function Gkebackup_RestorePlanRestoreConfigTransformationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "The description is a user specified string description\nof the transformation rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "FieldActions",
      "A list of transformation rule actions to take against candidate\nresources. Actions are executed in order defined - this order\nmatters, as they could potentially interfere with each other and\nthe first operation could affect the outcome of the second operation.\nStructure is documented below.",
      Gkebackup_RestorePlanRestoreConfigTransformationRuleFieldAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ResourceFilter",
      "This field is used to specify a set of fields that should be used to\ndetermine which resources in backup should be acted upon by the\nsupplied transformation rule actions, and this will ensure that only\nspecific resources are affected by transformation rule actions.\nStructure is documented below.",
      Gkebackup_RestorePlanRestoreConfigTransformationRuleResourceFilter_GetTypes(),
      false,
      false,
    ),
  ];
}
