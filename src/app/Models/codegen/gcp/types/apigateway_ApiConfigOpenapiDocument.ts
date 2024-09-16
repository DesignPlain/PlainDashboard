import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  apigateway_ApiConfigOpenapiDocumentDocument,
  apigateway_ApiConfigOpenapiDocumentDocument_GetTypes,
} from './apigateway_ApiConfigOpenapiDocumentDocument';

export interface apigateway_ApiConfigOpenapiDocument {
  /*
The OpenAPI Specification document file.
Structure is documented below.
*/
  document?: apigateway_ApiConfigOpenapiDocumentDocument;
}

export function apigateway_ApiConfigOpenapiDocument_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'document',
      'The OpenAPI Specification document file.\nStructure is documented below.',
      () => apigateway_ApiConfigOpenapiDocumentDocument_GetTypes(),
      true,
      false,
    ),
  ];
}
