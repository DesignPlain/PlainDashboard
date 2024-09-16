import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface rds_ParameterGroupParameter {
  /*
"immediate" (default), or "pending-reboot". Some
engines can't apply some parameters without a reboot, and you will need to
specify "pending-reboot" here.
*/
  applyMethod?: string;

  // The name of the DB parameter.
  name?: string;

  // The value of the DB parameter.
  value?: string;
}

export function rds_ParameterGroupParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the DB parameter.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The value of the DB parameter.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'applyMethod',
      '"immediate" (default), or "pending-reboot". Some\nengines can\'t apply some parameters without a reboot, and you will need to\nspecify "pending-reboot" here.',
      () => [],
      false,
      false,
    ),
  ];
}
