import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bigquery_JobQueryUserDefinedFunctionResource {
  /*
An inline resource that contains code for a user-defined function (UDF).
Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
*/
  inlineCode?: string;

  // A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
  resourceUri?: string;
}

export function bigquery_JobQueryUserDefinedFunctionResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'inlineCode',
      'An inline resource that contains code for a user-defined function (UDF).\nProviding a inline code resource is equivalent to providing a URI for a file containing the same code.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourceUri',
      'A code resource to load from a Google Cloud Storage URI (gs://bucket/path).',
      () => [],
      false,
      true,
    ),
  ];
}
