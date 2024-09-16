import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datafusion_InstanceAccelerator {
  /*
The type of an accelator for a CDF instance.
Possible values are: `ENABLED`, `DISABLED`.
*/
  state?: string;

  /*
The type of an accelator for a CDF instance.
Possible values are: `CDC`, `HEALTHCARE`, `CCAI_INSIGHTS`.
*/
  acceleratorType?: string;
}

export function datafusion_InstanceAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'state',
      'The type of an accelator for a CDF instance.\nPossible values are: `ENABLED`, `DISABLED`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'acceleratorType',
      'The type of an accelator for a CDF instance.\nPossible values are: `CDC`, `HEALTHCARE`, `CCAI_INSIGHTS`.',
      () => [],
      true,
      false,
    ),
  ];
}
