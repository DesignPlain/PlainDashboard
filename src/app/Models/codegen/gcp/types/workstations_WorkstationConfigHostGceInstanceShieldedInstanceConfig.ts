import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig {
  // Whether the instance has integrity monitoring enabled.
  enableIntegrityMonitoring?: boolean;

  // Whether the instance has Secure Boot enabled.
  enableSecureBoot?: boolean;

  // Whether the instance has the vTPM enabled.
  enableVtpm?: boolean;
}

export function workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enableIntegrityMonitoring',
      'Whether the instance has integrity monitoring enabled.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableSecureBoot',
      'Whether the instance has Secure Boot enabled.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableVtpm',
      'Whether the instance has the vTPM enabled.',
      () => [],
      false,
      false,
    ),
  ];
}
