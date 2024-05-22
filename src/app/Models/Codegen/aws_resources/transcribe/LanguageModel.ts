import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  transcribe_LanguageModelInputDataConfig,
  transcribe_LanguageModelInputDataConfig_GetTypes,
} from "../types/transcribe_LanguageModelInputDataConfig";

export interface LanguageModelArgs {
  // Name of reference base model.
  baseModelName?: string;

  // The input data config for the LanguageModel. See Input Data Config for more details.
  inputDataConfig?: transcribe_LanguageModelInputDataConfig;

  // The language code you selected for your language model. Refer to the [supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) page for accepted codes.
  languageCode?: string;

  // The model name.
  modelName?: string;

  // A map of tags to assign to the LanguageModel. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class LanguageModel extends Resource {
  // The model name.
  public modelName?: string;

  // A map of tags to assign to the LanguageModel. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // ARN of the LanguageModel.
  public arn?: string;

  // Name of reference base model.
  public baseModelName?: string;

  // The input data config for the LanguageModel. See Input Data Config for more details.
  public inputDataConfig?: transcribe_LanguageModelInputDataConfig;

  // The language code you selected for your language model. Refer to the [supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) page for accepted codes.
  public languageCode?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "baseModelName",
        "Name of reference base model.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "inputDataConfig",
        "The input data config for the LanguageModel. See Input Data Config for more details.",
        transcribe_LanguageModelInputDataConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "languageCode",
        "The language code you selected for your language model. Refer to the [supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) page for accepted codes.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "modelName",
        "The model name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the LanguageModel. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
