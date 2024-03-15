import { PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationConditionExpressionsConditions } from "./PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationConditionExpressionsConditions";

export interface PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationConditionExpressions {
  /*
Conditions to apply to the expression.
Structure is documented below.
*/
  Conditions?: PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationConditionExpressionsConditions;

  /*
The operator to apply to the result of conditions. Default and currently only supported value is AND.
Default value is `AND`.
Possible values are: `AND`.
*/
  LogicalOperator?: string;
}
