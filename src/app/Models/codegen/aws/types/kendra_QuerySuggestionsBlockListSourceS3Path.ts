import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kendra_QuerySuggestionsBlockListSourceS3Path {
  // Name of the S3 bucket that contains the file.
  bucket?: string;

  /*
Name of the file.

The following arguments are optional:
*/
  key?: string;
}

export function kendra_QuerySuggestionsBlockListSourceS3Path_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'Name of the file.\n\nThe following arguments are optional:',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bucket',
      'Name of the S3 bucket that contains the file.',
      () => [],
      true,
      false,
    ),
  ];
}
