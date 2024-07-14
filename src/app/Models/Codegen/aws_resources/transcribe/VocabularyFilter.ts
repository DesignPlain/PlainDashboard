import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface VocabularyFilterArgs {
  // The Amazon S3 location (URI) of the text file that contains your custom VocabularyFilter. Conflicts with `words` argument.
  vocabularyFilterFileUri?: string;

  /*
The name of the VocabularyFilter.

The following arguments are optional:
*/
  vocabularyFilterName?: string;

  // A list of terms to include in the vocabulary. Conflicts with `vocabulary_filter_file_uri` argument.
  words?: Array<string>;

  // The language code you selected for your vocabulary filter. Refer to the [supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) page for accepted codes.
  languageCode?: string;

  // A map of tags to assign to the VocabularyFilter. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class VocabularyFilter extends Resource {
  //
  public tagsAll?: Map<string, string>;

  // The Amazon S3 location (URI) of the text file that contains your custom VocabularyFilter. Conflicts with `words` argument.
  public vocabularyFilterFileUri?: string;

  /*
The name of the VocabularyFilter.

The following arguments are optional:
*/
  public vocabularyFilterName?: string;

  // A list of terms to include in the vocabulary. Conflicts with `vocabulary_filter_file_uri` argument.
  public words?: Array<string>;

  // ARN of the VocabularyFilter.
  public arn?: string;

  // Generated download URI.
  public downloadUri?: string;

  // The language code you selected for your vocabulary filter. Refer to the [supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) page for accepted codes.
  public languageCode?: string;

  // A map of tags to assign to the VocabularyFilter. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vocabularyFilterFileUri",
        "The Amazon S3 location (URI) of the text file that contains your custom VocabularyFilter. Conflicts with `words` argument.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vocabularyFilterName",
        "The name of the VocabularyFilter.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "words",
        "A list of terms to include in the vocabulary. Conflicts with `vocabulary_filter_file_uri` argument.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "languageCode",
        "The language code you selected for your vocabulary filter. Refer to the [supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) page for accepted codes.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the VocabularyFilter. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
