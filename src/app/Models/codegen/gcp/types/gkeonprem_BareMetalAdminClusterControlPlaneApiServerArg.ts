import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_BareMetalAdminClusterControlPlaneApiServerArg {
  // The argument name as it appears on the API Server command line please make sure to remove the leading dashes.
  argument?: string;

  // The value of the arg as it will be passed to the API Server command line.
  value?: string;
}

export function gkeonprem_BareMetalAdminClusterControlPlaneApiServerArg_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'value',
      'The value of the arg as it will be passed to the API Server command line.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'argument',
      'The argument name as it appears on the API Server command line please make sure to remove the leading dashes.',
      () => [],
      true,
      false,
    ),
  ];
}
