import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfig {
  /*
Characters to skip when doing de-identification of a value. These will be left alone and skipped.
Structure is documented below.
*/
  charactersToIgnores?: Array<dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore>;

  // is -
  maskingCharacter?: string;

  // is -4
  numberToMask?: number;

  /*
Mask characters in reverse order. For example, if masking_character is 0, number_to_mask is 14, and reverse_order is `false`, then the
input string `1234-5678-9012-3456` is masked as `00000000000000-3456`.
*/
  reverseOrder?: boolean;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "charactersToIgnores",
      "Characters to skip when doing de-identification of a value. These will be left alone and skipped.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maskingCharacter",
      "is *",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numberToMask",
      "is -4",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "reverseOrder",
      "Mask characters in reverse order. For example, if masking_character is 0, number_to_mask is 14, and reverse_order is `false`, then the\ninput string `1234-5678-9012-3456` is masked as `00000000000000-3456`.",
      [],
      false,
      false,
    ),
  ];
}
