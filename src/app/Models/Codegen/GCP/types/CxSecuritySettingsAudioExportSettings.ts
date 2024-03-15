export interface CxSecuritySettingsAudioExportSettings {
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
