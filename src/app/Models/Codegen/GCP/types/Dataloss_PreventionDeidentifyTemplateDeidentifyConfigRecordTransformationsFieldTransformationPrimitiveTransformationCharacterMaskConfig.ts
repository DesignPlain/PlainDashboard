import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationCharacterMaskConfig {
  /*
Mask characters in reverse order. For example, if masking_character is 0, number_to_mask is 14, and reverse_order is `false`, then the
input string `1234-5678-9012-3456` is masked as `00000000000000-3456`.
*/
  ReverseOrder?: boolean;

  /*
Characters to skip when doing de-identification of a value. These will be left alone and skipped.
Structure is documented below.
*/
  CharactersToIgnores?: Array<Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore>;

  // is -
  MaskingCharacter?: string;

  // is -4
  NumberToMask?: number;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationCharacterMaskConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "CharactersToIgnores",
      "Characters to skip when doing de-identification of a value. These will be left alone and skipped.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaskingCharacter",
      "is *",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NumberToMask",
      "is -4",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ReverseOrder",
      "Mask characters in reverse order. For example, if masking_character is 0, number_to_mask is 14, and reverse_order is `false`, then the\ninput string `1234-5678-9012-3456` is masked as `00000000000000-3456`.",
      [],
      false,
      false,
    ),
  ];
}
