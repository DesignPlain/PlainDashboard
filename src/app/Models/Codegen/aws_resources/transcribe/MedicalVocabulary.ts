import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface MedicalVocabularyArgs {
  /*
The name of the Medical Vocabulary.

The following arguments are optional:
*/
  vocabularyName?: string;

  // The language code you selected for your medical vocabulary. US English (en-US) is the only language supported with Amazon Transcribe Medical.
  languageCode?: string;

  // A map of tags to assign to the MedicalVocabulary. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon S3 location (URI) of the text file that contains your custom medical vocabulary.
  vocabularyFileUri?: string;
}
export class MedicalVocabulary extends Resource {
  // The Amazon S3 location (URI) of the text file that contains your custom medical vocabulary.
  public vocabularyFileUri?: string;

  /*
The name of the Medical Vocabulary.

The following arguments are optional:
*/
  public vocabularyName?: string;

  // ARN of the MedicalVocabulary.
  public arn?: string;

  // Generated download URI.
  public downloadUri?: string;

  // The language code you selected for your medical vocabulary. US English (en-US) is the only language supported with Amazon Transcribe Medical.
  public languageCode?: string;

  // A map of tags to assign to the MedicalVocabulary. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vocabularyName",
        "The name of the Medical Vocabulary.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "languageCode",
        "The language code you selected for your medical vocabulary. US English (en-US) is the only language supported with Amazon Transcribe Medical.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the MedicalVocabulary. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vocabularyFileUri",
        "The Amazon S3 location (URI) of the text file that contains your custom medical vocabulary.",
        [],
        true,
        false,
      ),
    ];
  }
}
