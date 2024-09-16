import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface route53_getQueryLogConfigFilter {
  // The name of the query logging configuration.
  name?: string;

  //
  values?: Array<string>;
}

export function route53_getQueryLogConfigFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the query logging configuration.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
