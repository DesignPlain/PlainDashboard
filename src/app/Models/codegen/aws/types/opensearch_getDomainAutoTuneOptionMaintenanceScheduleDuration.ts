import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface opensearch_getDomainAutoTuneOptionMaintenanceScheduleDuration {
  // Unit of time.
  unit?: string;

  // Duration of an Auto-Tune maintenance window.
  value?: number;
}

export function opensearch_getDomainAutoTuneOptionMaintenanceScheduleDuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'unit',
      'Unit of time.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'value',
      'Duration of an Auto-Tune maintenance window.',
      () => [],
      true,
      false,
    ),
  ];
}
