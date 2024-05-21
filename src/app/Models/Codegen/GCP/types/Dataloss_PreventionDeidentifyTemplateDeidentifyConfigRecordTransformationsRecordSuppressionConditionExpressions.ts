import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressions {
  /*
Conditions to apply to the expression.
Structure is documented below.
*/
  conditions?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions;

  /*
The operator to apply to the result of conditions. Default and currently only supported value is AND.
Default value is `AND`.
Possible values are: `AND`.
*/
  logicalOperator?: string;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "conditions",
      "Conditions to apply to the expression.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logicalOperator",
      "The operator to apply to the result of conditions. Default and currently only supported value is AND.\nDefault value is `AND`.\nPossible values are: `AND`.",
      [],
      false,
      false,
    ),
  ];
}
