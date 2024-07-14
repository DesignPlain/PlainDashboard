import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface polly_getVoicesVoice {
  // Specifies which engines are supported by a given voice.
  supportedEngines?: Array<string>;

  // Additional codes for languages available for the specified voice in addition to its default language.
  additionalLanguageCodes?: Array<string>;

  // Gender of the voice.
  gender?: string;

  // Amazon Polly assigned voice ID.
  id?: string;

  // Language identification tag for filtering the list of voices returned. If not specified, all available voices are returned.
  languageCode?: string;

  // Human readable name of the language in English.
  languageName?: string;

  // Name of the voice.
  name?: string;
}

export function polly_getVoicesVoice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the voice.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "supportedEngines",
      "Specifies which engines are supported by a given voice.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalLanguageCodes",
      "Additional codes for languages available for the specified voice in addition to its default language.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gender",
      "Gender of the voice.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Amazon Polly assigned voice ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "languageCode",
      "Language identification tag for filtering the list of voices returned. If not specified, all available voices are returned.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "languageName",
      "Human readable name of the language in English.",
      [],
      true,
      false,
    ),
  ];
}
