import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apigateway_DocumentationPartLocation {
  // URL path of the target. The default value is `/` for the root resource.
  path?: string;

  // HTTP status code of a response. The default value is `-` for any status code.
  statusCode?: string;

  // Type of API entity to which the documentation content appliesE.g., `API`, `METHOD` or `REQUEST_BODY`
  type?: string;

  // HTTP verb of a method. The default value is `-` for any method.
  method?: string;

  // Name of the targeted API entity.
  name?: string;
}

export function apigateway_DocumentationPartLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'path',
      'URL path of the target. The default value is `/` for the root resource.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'statusCode',
      'HTTP status code of a response. The default value is `*` for any status code.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of API entity to which the documentation content appliesE.g., `API`, `METHOD` or `REQUEST_BODY`',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'method',
      'HTTP verb of a method. The default value is `*` for any method.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the targeted API entity.',
      () => [],
      false,
      true,
    ),
  ];
}
