import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface elasticbeanstalk_ConfigurationTemplateSetting {
  // A unique name for this Template.
  name?: string;

  //
  namespace?: string;

  //
  resource?: string;

  //
  value?: string;
}

export function elasticbeanstalk_ConfigurationTemplateSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'A unique name for this Template.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'namespace',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resource',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'value', '', () => [], true, false),
  ];
}
