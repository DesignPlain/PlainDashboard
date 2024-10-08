import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSourceParametersTwitter {
  // The maximum number of rows to query.
  maxRows?: number;

  // The Twitter query to retrieve the data.
  query?: string;
}

export function quicksight_DataSourceParametersTwitter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxRows',
      'The maximum number of rows to query.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'query',
      'The Twitter query to retrieve the data.',
      () => [],
      true,
      false,
    ),
  ];
}
