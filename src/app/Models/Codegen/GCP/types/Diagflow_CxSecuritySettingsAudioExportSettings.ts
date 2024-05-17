import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxSecuritySettingsAudioExportSettings {
  // Filename pattern for exported audio.
  AudioExportPattern?: string;

  /*
File format for exported audio file. Currently only in telephony recordings.
- MULAW: G.711 mu-law PCM with 8kHz sample rate.
- MP3: MP3 file format.
- OGG: OGG Vorbis.
Possible values are: `MULAW`, `MP3`, `OGG`.
*/
  AudioFormat?: string;

  // Enable audio redaction if it is true.
  EnableAudioRedaction?: boolean;

  // Cloud Storage bucket to export audio record to. Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy.
  GcsBucket?: string;
}

export function Diagflow_CxSecuritySettingsAudioExportSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AudioExportPattern",
      "Filename pattern for exported audio.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AudioFormat",
      "File format for exported audio file. Currently only in telephony recordings.\n* MULAW: G.711 mu-law PCM with 8kHz sample rate.\n* MP3: MP3 file format.\n* OGG: OGG Vorbis.\nPossible values are: `MULAW`, `MP3`, `OGG`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableAudioRedaction",
      "Enable audio redaction if it is true.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GcsBucket",
      "Cloud Storage bucket to export audio record to. Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy.",
      [],
      false,
      false,
    ),
  ];
}
