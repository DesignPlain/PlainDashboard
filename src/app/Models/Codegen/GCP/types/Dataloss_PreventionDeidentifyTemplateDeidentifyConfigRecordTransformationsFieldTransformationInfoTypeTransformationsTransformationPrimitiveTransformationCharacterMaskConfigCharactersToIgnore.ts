import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore {
  // Characters to not transform when masking. Only one of this or `common_characters_to_ignore` must be specified.
  charactersToSkip?: string;

  /*
Common characters to not transform when masking. Useful to avoid removing punctuation. Only one of this or `characters_to_skip` must be specified.
Possible values are: `NUMERIC`, `ALPHA_UPPER_CASE`, `ALPHA_LOWER_CASE`, `PUNCTUATION`, `WHITESPACE`.
*/
  commonCharactersToIgnore?: string;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCharacterMaskConfigCharactersToIgnore_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "commonCharactersToIgnore",
      "Common characters to not transform when masking. Useful to avoid removing punctuation. Only one of this or `characters_to_skip` must be specified.\nPossible values are: `NUMERIC`, `ALPHA_UPPER_CASE`, `ALPHA_LOWER_CASE`, `PUNCTUATION`, `WHITESPACE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "charactersToSkip",
      "Characters to not transform when masking. Only one of this or `common_characters_to_ignore` must be specified.",
      [],
      false,
      false,
    ),
  ];
}
