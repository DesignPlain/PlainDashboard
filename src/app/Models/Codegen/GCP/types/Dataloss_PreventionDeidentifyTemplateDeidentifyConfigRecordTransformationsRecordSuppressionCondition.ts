import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressions,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressions_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressions";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionCondition {
  /*
An expression, consisting of an operator and conditions.
Structure is documented below.
*/
  Expressions?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressions;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Expressions",
      "An expression, consisting of an operator and conditions.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressions_GetTypes(),
      false,
      false,
    ),
  ];
}
