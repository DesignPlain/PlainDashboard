import { PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore } from "./PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore";

export interface PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfig {
  // is -4
  NumberToMask?: number;

  /*
Mask characters in reverse order. For example, if masking_character is 0, number_to_mask is 14, and reverse_order is `false`, then the
input string `1234-5678-9012-3456` is masked as `00000000000000-3456`.
*/
  ReverseOrder?: boolean;

  /*
Characters to skip when doing de-identification of a value. These will be left alone and skipped.
Structure is documented below.
*/
  CharactersToIgnores?: Array<PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore>;

  // is -
  MaskingCharacter?: string;
}
