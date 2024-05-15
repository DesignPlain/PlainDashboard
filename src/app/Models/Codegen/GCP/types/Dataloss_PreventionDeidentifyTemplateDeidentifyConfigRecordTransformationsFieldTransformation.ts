import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationField,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationField_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationField";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformations,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformations_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformations";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformation,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformation_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformation";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationCondition,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationCondition_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationCondition";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation {
  /*
Treat the contents of the field as free text, and selectively transform content that matches an InfoType.
Only one of `primitive_transformation` or `info_type_transformations` must be specified.
Structure is documented below.
*/
  InfoTypeTransformations?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformations;

  /*
Apply the transformation to the entire field.
The `primitive_transformation` block must only contain one argument, corresponding to the type of transformation.
Only one of `primitive_transformation` or `info_type_transformations` must be specified.
Structure is documented below.
*/
  PrimitiveTransformation?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformation;

  /*
Only apply the transformation if the condition evaluates to true for the given RecordCondition. The conditions are allowed to reference fields that are not used in the actual transformation.
Example Use Cases:
- Apply a different bucket transformation to an age column if the zip code column for the same record is within a specific range.
- Redact a field if the date of birth field is greater than 85.
Structure is documented below.
*/
  Condition?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationCondition;

  /*
Input field(s) to apply the transformation to. When you have columns that reference their position within a list, omit the index from the FieldId.
FieldId name matching ignores the index. For example, instead of "contact.nums[0].type", use "contact.nums.type".
Structure is documented below.
*/
  Fields?: Array<Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationField>;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Condition",
      "Only apply the transformation if the condition evaluates to true for the given RecordCondition. The conditions are allowed to reference fields that are not used in the actual transformation.\nExample Use Cases:\n- Apply a different bucket transformation to an age column if the zip code column for the same record is within a specific range.\n- Redact a field if the date of birth field is greater than 85.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Fields",
      'Input field(s) to apply the transformation to. When you have columns that reference their position within a list, omit the index from the FieldId.\nFieldId name matching ignores the index. For example, instead of "contact.nums[0].type", use "contact.nums.type".\nStructure is documented below.',
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationField_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "InfoTypeTransformations",
      "Treat the contents of the field as free text, and selectively transform content that matches an InfoType.\nOnly one of `primitive_transformation` or `info_type_transformations` must be specified.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformations_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PrimitiveTransformation",
      "Apply the transformation to the entire field.\nThe `primitive_transformation` block must only contain one argument, corresponding to the type of transformation.\nOnly one of `primitive_transformation` or `info_type_transformations` must be specified.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformation_GetTypes(),
      false,
      false,
    ),
  ];
}
