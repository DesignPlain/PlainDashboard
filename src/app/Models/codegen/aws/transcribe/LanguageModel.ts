import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  transcribe_LanguageModelInputDataConfig,
  transcribe_LanguageModelInputDataConfig_GetTypes,
} from '../types/transcribe_LanguageModelInputDataConfig';

export interface LanguageModelArgs {
  // Name of reference base model.
  baseModelName?: string;

  // The input data config for the LanguageModel. See Input Data Config for more details.
  inputDataConfig?: transcribe_LanguageModelInputDataConfig;

  // The language code you selected for your language model. Refer to the [supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) page for accepted codes.
  languageCode?: string;

  // The model name.
  modelName?: string;

  //
  tags?: Map<string, string>;
}
export class LanguageModel extends DS_Resource {
  // ARN of the LanguageModel.
  public arn?: string;

  // Name of reference base model.
  public baseModelName?: string;

  // The input data config for the LanguageModel. See Input Data Config for more details.
  public inputDataConfig?: transcribe_LanguageModelInputDataConfig;

  // The language code you selected for your language model. Refer to the [supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) page for accepted codes.
  public languageCode?: string;

  // The model name.
  public modelName?: string;

  //
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'baseModelName',
        'Name of reference base model.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'inputDataConfig',
        'The input data config for the LanguageModel. See Input Data Config for more details.',
        () => transcribe_LanguageModelInputDataConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'languageCode',
        'The language code you selected for your language model. Refer to the [supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) page for accepted codes.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'modelName',
        'The model name.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        '',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
