import { PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationReplaceConfigNewValue } from "./PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationReplaceConfigNewValue";

export interface PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationReplaceConfig {
  /*
Replace each input value with a given value.
The `new_value` block must only contain one argument. For example when replacing the contents of a string-type field, only `string_value` should be set.
Structure is documented below.
*/
  NewValue?: PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationReplaceConfigNewValue;
}
