import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  diagflow_CxPageFormParameterAdvancedSettingsDtmfSettings,
  diagflow_CxPageFormParameterAdvancedSettingsDtmfSettings_GetTypes,
} from './diagflow_CxPageFormParameterAdvancedSettingsDtmfSettings';

export interface diagflow_CxPageFormParameterAdvancedSettings {
  /*
Define behaviors for DTMF (dual tone multi frequency). DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Exposed at the following levels:
- Agent level
- Flow level
- Page level
- Parameter level
Structure is documented below.
*/
  dtmfSettings?: diagflow_CxPageFormParameterAdvancedSettingsDtmfSettings;
}

export function diagflow_CxPageFormParameterAdvancedSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'dtmfSettings',
      'Define behaviors for DTMF (dual tone multi frequency). DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Exposed at the following levels:\n* Agent level\n* Flow level\n* Page level\n* Parameter level\nStructure is documented below.',
      () => diagflow_CxPageFormParameterAdvancedSettingsDtmfSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
