import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  comprehend_EntityRecognizerInputDataConfigAnnotations,
  comprehend_EntityRecognizerInputDataConfigAnnotations_GetTypes,
} from './comprehend_EntityRecognizerInputDataConfigAnnotations';
import {
  comprehend_EntityRecognizerInputDataConfigAugmentedManifest,
  comprehend_EntityRecognizerInputDataConfigAugmentedManifest_GetTypes,
} from './comprehend_EntityRecognizerInputDataConfigAugmentedManifest';
import {
  comprehend_EntityRecognizerInputDataConfigDocuments,
  comprehend_EntityRecognizerInputDataConfigDocuments_GetTypes,
} from './comprehend_EntityRecognizerInputDataConfigDocuments';
import {
  comprehend_EntityRecognizerInputDataConfigEntityList,
  comprehend_EntityRecognizerInputDataConfigEntityList_GetTypes,
} from './comprehend_EntityRecognizerInputDataConfigEntityList';
import {
  comprehend_EntityRecognizerInputDataConfigEntityType,
  comprehend_EntityRecognizerInputDataConfigEntityType_GetTypes,
} from './comprehend_EntityRecognizerInputDataConfigEntityType';

export interface comprehend_EntityRecognizerInputDataConfig {
  /*
Specifies location of the document annotation data.
See the `annotations` Configuration Block section below.
One of `annotations` or `entity_list` is required.
*/
  annotations?: comprehend_EntityRecognizerInputDataConfigAnnotations;

  /*
List of training datasets produced by Amazon SageMaker Ground Truth.
Used if `data_format` is `AUGMENTED_MANIFEST`.
See the `augmented_manifests` Configuration Block section below.
*/
  augmentedManifests?: Array<comprehend_EntityRecognizerInputDataConfigAugmentedManifest>;

  /*
The format for the training data.
One of `COMPREHEND_CSV` or `AUGMENTED_MANIFEST`.
*/
  dataFormat?: string;

  /*
Specifies a collection of training documents.
Used if `data_format` is `COMPREHEND_CSV`.
See the `documents` Configuration Block section below.
*/
  documents?: comprehend_EntityRecognizerInputDataConfigDocuments;

  /*
Specifies location of the entity list data.
See the `entity_list` Configuration Block section below.
One of `entity_list` or `annotations` is required.
*/
  entityList?: comprehend_EntityRecognizerInputDataConfigEntityList;

  /*
Set of entity types to be recognized.
Has a maximum of 25 items.
See the `entity_types` Configuration Block section below.
*/
  entityTypes?: Array<comprehend_EntityRecognizerInputDataConfigEntityType>;
}

export function comprehend_EntityRecognizerInputDataConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'documents',
      'Specifies a collection of training documents.\nUsed if `data_format` is `COMPREHEND_CSV`.\nSee the `documents` Configuration Block section below.',
      () => comprehend_EntityRecognizerInputDataConfigDocuments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'entityList',
      'Specifies location of the entity list data.\nSee the `entity_list` Configuration Block section below.\nOne of `entity_list` or `annotations` is required.',
      () => comprehend_EntityRecognizerInputDataConfigEntityList_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'entityTypes',
      'Set of entity types to be recognized.\nHas a maximum of 25 items.\nSee the `entity_types` Configuration Block section below.',
      () => comprehend_EntityRecognizerInputDataConfigEntityType_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'annotations',
      'Specifies location of the document annotation data.\nSee the `annotations` Configuration Block section below.\nOne of `annotations` or `entity_list` is required.',
      () => comprehend_EntityRecognizerInputDataConfigAnnotations_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'augmentedManifests',
      'List of training datasets produced by Amazon SageMaker Ground Truth.\nUsed if `data_format` is `AUGMENTED_MANIFEST`.\nSee the `augmented_manifests` Configuration Block section below.',
      () =>
        comprehend_EntityRecognizerInputDataConfigAugmentedManifest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dataFormat',
      'The format for the training data.\nOne of `COMPREHEND_CSV` or `AUGMENTED_MANIFEST`.',
      () => [],
      false,
      false,
    ),
  ];
}
