import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface servicecatalog_ProvisionedProductOutput {
  // The description of the output.
  description?: string;

  // The output key.
  key?: string;

  // The output value.
  value?: string;
}

export function servicecatalog_ProvisionedProductOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      'The description of the output.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'key',
      'The output key.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The output value.',
      () => [],
      false,
      false,
    ),
  ];
}
