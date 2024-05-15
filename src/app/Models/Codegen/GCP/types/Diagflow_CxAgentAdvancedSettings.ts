import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxAgentAdvancedSettingsAudioExportGcsDestination,
  Diagflow_CxAgentAdvancedSettingsAudioExportGcsDestination_GetTypes,
} from "./Diagflow_CxAgentAdvancedSettingsAudioExportGcsDestination";
import {
  Diagflow_CxAgentAdvancedSettingsDtmfSettings,
  Diagflow_CxAgentAdvancedSettingsDtmfSettings_GetTypes,
} from "./Diagflow_CxAgentAdvancedSettingsDtmfSettings";

export interface Diagflow_CxAgentAdvancedSettings {
  /*
If present, incoming audio is exported by Dialogflow to the configured Google Cloud Storage destination. Exposed at the following levels:
- Agent level
- Flow level
Structure is documented below.
*/
  AudioExportGcsDestination?: Diagflow_CxAgentAdvancedSettingsAudioExportGcsDestination;

  /*
Define behaviors for DTMF (dual tone multi frequency). DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Exposed at the following levels:
- Agent level
- Flow level
- Page level
- Parameter level
Structure is documented below.
*/
  DtmfSettings?: Diagflow_CxAgentAdvancedSettingsDtmfSettings;
}

export function Diagflow_CxAgentAdvancedSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "DtmfSettings",
      "Define behaviors for DTMF (dual tone multi frequency). DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Exposed at the following levels:\n* Agent level\n* Flow level\n* Page level\n* Parameter level\nStructure is documented below.",
      Diagflow_CxAgentAdvancedSettingsDtmfSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AudioExportGcsDestination",
      "If present, incoming audio is exported by Dialogflow to the configured Google Cloud Storage destination. Exposed at the following levels:\n* Agent level\n* Flow level\nStructure is documented below.",
      Diagflow_CxAgentAdvancedSettingsAudioExportGcsDestination_GetTypes(),
      false,
      false,
    ),
  ];
}
