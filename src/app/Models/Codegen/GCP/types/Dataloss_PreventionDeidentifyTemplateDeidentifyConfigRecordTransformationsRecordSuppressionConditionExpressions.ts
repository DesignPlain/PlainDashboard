import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressions {
  /*
Conditions to apply to the expression.
Structure is documented below.
*/
  Conditions?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions;

  /*
The operator to apply to the result of conditions. Default and currently only supported value is AND.
Default value is `AND`.
Possible values are: `AND`.
*/
  LogicalOperator?: string;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Conditions",
      "Conditions to apply to the expression.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LogicalOperator",
      "The operator to apply to the result of conditions. Default and currently only supported value is AND.\nDefault value is `AND`.\nPossible values are: `AND`.",
      [],
      false,
      false,
    ),
  ];
}
