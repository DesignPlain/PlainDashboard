import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationCondition,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationCondition_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationCondition";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationField,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationField_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationField";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformations,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformations_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformations";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformation,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformation_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformation";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation {
  /*
Only apply the transformation if the condition evaluates to true for the given RecordCondition. The conditions are allowed to reference fields that are not used in the actual transformation.
Example Use Cases:
- Apply a different bucket transformation to an age column if the zip code column for the same record is within a specific range.
- Redact a field if the date of birth field is greater than 85.
Structure is documented below.
*/
  condition?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationCondition;

  /*
Input field(s) to apply the transformation to. When you have columns that reference their position within a list, omit the index from the FieldId.
FieldId name matching ignores the index. For example, instead of "contact.nums[0].type", use "contact.nums.type".
Structure is documented below.
*/
  fields?: Array<dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationField>;

  /*
Treat the contents of the field as free text, and selectively transform content that matches an InfoType.
Only one of `primitive_transformation` or `info_type_transformations` must be specified.
Structure is documented below.
*/
  infoTypeTransformations?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformations;

  /*
Apply the transformation to the entire field.
The `primitive_transformation` block must only contain one argument, corresponding to the type of transformation.
Only one of `primitive_transformation` or `info_type_transformations` must be specified.
Structure is documented below.
*/
  primitiveTransformation?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformation;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "condition",
      "Only apply the transformation if the condition evaluates to true for the given RecordCondition. The conditions are allowed to reference fields that are not used in the actual transformation.\nExample Use Cases:\n- Apply a different bucket transformation to an age column if the zip code column for the same record is within a specific range.\n- Redact a field if the date of birth field is greater than 85.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fields",
      'Input field(s) to apply the transformation to. When you have columns that reference their position within a list, omit the index from the FieldId.\nFieldId name matching ignores the index. For example, instead of "contact.nums[0].type", use "contact.nums.type".\nStructure is documented below.',
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationField_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "infoTypeTransformations",
      "Treat the contents of the field as free text, and selectively transform content that matches an InfoType.\nOnly one of `primitive_transformation` or `info_type_transformations` must be specified.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformations_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "primitiveTransformation",
      "Apply the transformation to the entire field.\nThe `primitive_transformation` block must only contain one argument, corresponding to the type of transformation.\nOnly one of `primitive_transformation` or `info_type_transformations` must be specified.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformation_GetTypes(),
      false,
      false,
    ),
  ];
}
