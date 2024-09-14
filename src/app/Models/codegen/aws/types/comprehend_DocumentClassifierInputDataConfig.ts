import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  comprehend_DocumentClassifierInputDataConfigAugmentedManifest,
  comprehend_DocumentClassifierInputDataConfigAugmentedManifest_GetTypes,
} from "./comprehend_DocumentClassifierInputDataConfigAugmentedManifest";

export interface comprehend_DocumentClassifierInputDataConfig {
  /*
List of training datasets produced by Amazon SageMaker Ground Truth.
Used if `data_format` is `AUGMENTED_MANIFEST`.
See the `augmented_manifests` Configuration Block section below.
*/
  augmentedManifests?: Array<comprehend_DocumentClassifierInputDataConfigAugmentedManifest>;

  /*
The format for the training data.
One of `COMPREHEND_CSV` or `AUGMENTED_MANIFEST`.
*/
  dataFormat?: string;

  /*
Delimiter between labels when training a multi-label classifier.
Valid values are `|`, `~`, `!`, `@`, `#`, `$`, `%!`(MISSING), `^`, `-`, `-`, `_`, `+`, `=`, `\`, `:`, `;`, `>`, `?`, `/`, `<space>`, and `<tab>`.
Default is `|`.
*/
  labelDelimiter?: string;

  /*
Location of training documents.
Used if `data_format` is `COMPREHEND_CSV`.
*/
  s3Uri?: string;

  //
  testS3Uri?: string;
}

export function comprehend_DocumentClassifierInputDataConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "augmentedManifests",
      "List of training datasets produced by Amazon SageMaker Ground Truth.\nUsed if `data_format` is `AUGMENTED_MANIFEST`.\nSee the `augmented_manifests` Configuration Block section below.",
      () =>
        comprehend_DocumentClassifierInputDataConfigAugmentedManifest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataFormat",
      "The format for the training data.\nOne of `COMPREHEND_CSV` or `AUGMENTED_MANIFEST`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "labelDelimiter",
      "Delimiter between labels when training a multi-label classifier.\nValid values are `|`, `~`, `!`, `@`, `#`, `$`, `%`, `^`, `*`, `-`, `_`, `+`, `=`, `\\`, `:`, `;`, `>`, `?`, `/`, `<space>`, and `<tab>`.\nDefault is `|`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Uri",
      "Location of training documents.\nUsed if `data_format` is `COMPREHEND_CSV`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "testS3Uri",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
