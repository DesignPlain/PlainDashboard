import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting,
  lex_V2modelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting_GetTypes,
} from "./lex_V2modelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting";
import {
  lex_V2modelsSlotTypeValueSelectionSettingRegexFilter,
  lex_V2modelsSlotTypeValueSelectionSettingRegexFilter_GetTypes,
} from "./lex_V2modelsSlotTypeValueSelectionSettingRegexFilter";

export interface lex_V2modelsSlotTypeValueSelectionSetting {
  // Provides settings that enable advanced recognition settings for slot values. You can use this to enable using slot values as a custom vocabulary for recognizing user utterances. See [`advanced_recognition_setting` argument reference] below.
  advancedRecognitionSettings?: Array<lex_V2modelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting>;

  // Used to validate the value of the slot. See [`regex_filter` argument reference] below.
  regexFilters?: Array<lex_V2modelsSlotTypeValueSelectionSettingRegexFilter>;

  // Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values: `ORIGINAL_VALUE` - Returns the value entered by the user, if the user value is similar to the slot value. `TOP_RESOLUTION` If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned. If you don't specify the valueSelectionStrategy , the default is `ORIGINAL_VALUE`. Valid values are `OriginalValue`, `TopResolution`, and `Concatenation`.
  resolutionStrategy?: string;
}

export function lex_V2modelsSlotTypeValueSelectionSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "advancedRecognitionSettings",
      "Provides settings that enable advanced recognition settings for slot values. You can use this to enable using slot values as a custom vocabulary for recognizing user utterances. See [`advanced_recognition_setting` argument reference] below.",
      lex_V2modelsSlotTypeValueSelectionSettingAdvancedRecognitionSetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "regexFilters",
      "Used to validate the value of the slot. See [`regex_filter` argument reference] below.",
      lex_V2modelsSlotTypeValueSelectionSettingRegexFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resolutionStrategy",
      "Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values: `ORIGINAL_VALUE` - Returns the value entered by the user, if the user value is similar to the slot value. `TOP_RESOLUTION` If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned. If you don't specify the valueSelectionStrategy , the default is `ORIGINAL_VALUE`. Valid values are `OriginalValue`, `TopResolution`, and `Concatenation`.",
      [],
      true,
      false,
    ),
  ];
}
