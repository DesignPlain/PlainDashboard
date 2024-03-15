import { RestorePlanRestoreConfigTransformationRuleFieldAction } from "./RestorePlanRestoreConfigTransformationRuleFieldAction";
import { RestorePlanRestoreConfigTransformationRuleResourceFilter } from "./RestorePlanRestoreConfigTransformationRuleResourceFilter";

export interface RestorePlanRestoreConfigTransformationRule {
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
  FieldActions?: Array<RestorePlanRestoreConfigTransformationRuleFieldAction>;

  /*
This field is used to specify a set of fields that should be used to
determine which resources in backup should be acted upon by the
supplied transformation rule actions, and this will ensure that only
specific resources are affected by transformation rule actions.
Structure is documented below.
*/
  ResourceFilter?: RestorePlanRestoreConfigTransformationRuleResourceFilter;
}
