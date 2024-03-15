import { PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationConditionExpressionsConditionsConditionField } from "./PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationConditionExpressionsConditionsConditionField";
import { PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationConditionExpressionsConditionsConditionValue } from "./PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationConditionExpressionsConditionsConditionValue";

export interface PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationConditionExpressionsConditionsCondition {
  /*
Field within the record this condition is evaluated against.
Structure is documented below.
*/
  Field?: PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationConditionExpressionsConditionsConditionField;

  /*
Operator used to compare the field or infoType to the value.
Possible values are: `EQUAL_TO`, `NOT_EQUAL_TO`, `GREATER_THAN`, `LESS_THAN`, `GREATER_THAN_OR_EQUALS`, `LESS_THAN_OR_EQUALS`, `EXISTS`.
*/
  Operator?: string;

  /*
Value to compare against. [Mandatory, except for EXISTS tests.]
Structure is documented below.
*/
  Value?: PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationConditionExpressionsConditionsConditionValue;
}
