import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  diagflow_CxAgentAdvancedSettingsAudioExportGcsDestination,
  diagflow_CxAgentAdvancedSettingsAudioExportGcsDestination_GetTypes,
} from "./diagflow_CxAgentAdvancedSettingsAudioExportGcsDestination";
import {
  diagflow_CxAgentAdvancedSettingsDtmfSettings,
  diagflow_CxAgentAdvancedSettingsDtmfSettings_GetTypes,
} from "./diagflow_CxAgentAdvancedSettingsDtmfSettings";

export interface diagflow_CxAgentAdvancedSettings {
  /*
If present, incoming audio is exported by Dialogflow to the configured Google Cloud Storage destination. Exposed at the following levels:
- Agent level
- Flow level
Structure is documented below.
*/
  audioExportGcsDestination?: diagflow_CxAgentAdvancedSettingsAudioExportGcsDestination;

  /*
Define behaviors for DTMF (dual tone multi frequency). DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Exposed at the following levels:
- Agent level
- Flow level
- Page level
- Parameter level
Structure is documented below.
*/
  dtmfSettings?: diagflow_CxAgentAdvancedSettingsDtmfSettings;
}

export function diagflow_CxAgentAdvancedSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "audioExportGcsDestination",
      "If present, incoming audio is exported by Dialogflow to the configured Google Cloud Storage destination. Exposed at the following levels:\n* Agent level\n* Flow level\nStructure is documented below.",
      () =>
        diagflow_CxAgentAdvancedSettingsAudioExportGcsDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dtmfSettings",
      "Define behaviors for DTMF (dual tone multi frequency). DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Exposed at the following levels:\n* Agent level\n* Flow level\n* Page level\n* Parameter level\nStructure is documented below.",
      () => diagflow_CxAgentAdvancedSettingsDtmfSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
