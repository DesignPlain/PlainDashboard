import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_CatalogTableOptimizerConfiguration {
  // The ARN of the IAM role to use for the table optimizer.
  roleArn?: string;

  // Indicates whether the table optimizer is enabled.
  enabled?: boolean;
}

export function glue_CatalogTableOptimizerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The ARN of the IAM role to use for the table optimizer.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Indicates whether the table optimizer is enabled.',
      () => [],
      true,
      false,
    ),
  ];
}
