import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionField,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionField_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionField";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionValue,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionValue_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionValue";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsCondition {
  /*
Field within the record this condition is evaluated against.
Structure is documented below.
*/
  Field?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionField;

  /*
Operator used to compare the field or infoType to the value.
Possible values are: `EQUAL_TO`, `NOT_EQUAL_TO`, `GREATER_THAN`, `LESS_THAN`, `GREATER_THAN_OR_EQUALS`, `LESS_THAN_OR_EQUALS`, `EXISTS`.
*/
  Operator?: string;

  /*
Value to compare against. [Mandatory, except for EXISTS tests.]
Structure is documented below.
*/
  Value?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionValue;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Field",
      "Field within the record this condition is evaluated against.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionField_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Operator",
      "Operator used to compare the field or infoType to the value.\nPossible values are: `EQUAL_TO`, `NOT_EQUAL_TO`, `GREATER_THAN`, `LESS_THAN`, `GREATER_THAN_OR_EQUALS`, `LESS_THAN_OR_EQUALS`, `EXISTS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Value",
      "Value to compare against. [Mandatory, except for EXISTS tests.]\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionValue_GetTypes(),
      false,
      false,
    ),
  ];
}
