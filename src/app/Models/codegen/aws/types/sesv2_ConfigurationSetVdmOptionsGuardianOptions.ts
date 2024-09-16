import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sesv2_ConfigurationSetVdmOptionsGuardianOptions {
  // Specifies the status of your VDM optimized shared delivery. Valid values: `ENABLED`, `DISABLED`.
  optimizedSharedDelivery?: string;
}

export function sesv2_ConfigurationSetVdmOptionsGuardianOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'optimizedSharedDelivery',
      'Specifies the status of your VDM optimized shared delivery. Valid values: `ENABLED`, `DISABLED`.',
      () => [],
      false,
      false,
    ),
  ];
}
