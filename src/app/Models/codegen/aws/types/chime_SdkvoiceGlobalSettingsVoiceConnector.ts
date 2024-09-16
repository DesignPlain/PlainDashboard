import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface chime_SdkvoiceGlobalSettingsVoiceConnector {
  // The S3 bucket that stores the Voice Connector's call detail records.
  cdrBucket?: string;
}

export function chime_SdkvoiceGlobalSettingsVoiceConnector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'cdrBucket',
      "The S3 bucket that stores the Voice Connector's call detail records.",
      () => [],
      false,
      false,
    ),
  ];
}
