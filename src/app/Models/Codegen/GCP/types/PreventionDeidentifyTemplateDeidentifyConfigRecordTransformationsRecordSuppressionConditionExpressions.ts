import { PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions } from "./PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions";

export interface PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressions {
  /*
Conditions to apply to the expression.
Structure is documented below.
*/
  Conditions?: PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions;

  /*
The operator to apply to the result of conditions. Default and currently only supported value is AND.
Default value is `AND`.
Possible values are: `AND`.
*/
  LogicalOperator?: string;
}
