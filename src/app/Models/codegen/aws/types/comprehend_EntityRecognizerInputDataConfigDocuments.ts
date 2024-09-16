import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface comprehend_EntityRecognizerInputDataConfigDocuments {
  //
  testS3Uri?: string;

  /*
Specifies how the input files should be processed.
One of `ONE_DOC_PER_LINE` or `ONE_DOC_PER_FILE`.
*/
  inputFormat?: string;

  // Location of training documents.
  s3Uri?: string;
}

export function comprehend_EntityRecognizerInputDataConfigDocuments_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'inputFormat',
      'Specifies how the input files should be processed.\nOne of `ONE_DOC_PER_LINE` or `ONE_DOC_PER_FILE`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      's3Uri',
      'Location of training documents.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'testS3Uri',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
