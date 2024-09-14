import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VocabularyArgs {
  // The language code you selected for your vocabulary.
  languageCode?: string;

  // A list of terms to include in the vocabulary. Conflicts with `vocabulary_file_uri`
  phrases?: Array<string>;

  // A map of tags to assign to the Vocabulary. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon S3 location (URI) of the text file that contains your custom vocabulary. Conflicts wth `phrases`.
  vocabularyFileUri?: string;

  /*
The name of the Vocabulary.

The following arguments are optional:
*/
  vocabularyName?: string;
}
export class Vocabulary extends DS_Resource {
  //
  public tagsAll?: Map<string, string>;

  // The Amazon S3 location (URI) of the text file that contains your custom vocabulary. Conflicts wth `phrases`.
  public vocabularyFileUri?: string;

  /*
The name of the Vocabulary.

The following arguments are optional:
*/
  public vocabularyName?: string;

  // ARN of the Vocabulary.
  public arn?: string;

  // Generated download URI.
  public downloadUri?: string;

  // The language code you selected for your vocabulary.
  public languageCode?: string;

  // A list of terms to include in the vocabulary. Conflicts with `vocabulary_file_uri`
  public phrases?: Array<string>;

  // A map of tags to assign to the Vocabulary. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vocabularyName",
        "The name of the Vocabulary.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "languageCode",
        "The language code you selected for your vocabulary.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "phrases",
        "A list of terms to include in the vocabulary. Conflicts with `vocabulary_file_uri`",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the Vocabulary. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vocabularyFileUri",
        "The Amazon S3 location (URI) of the text file that contains your custom vocabulary. Conflicts wth `phrases`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
