import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  mediapackage_ChannelHlsIngestIngestEndpoint,
  mediapackage_ChannelHlsIngestIngestEndpoint_GetTypes,
} from './mediapackage_ChannelHlsIngestIngestEndpoint';

export interface mediapackage_ChannelHlsIngest {
  // A list of the ingest endpoints
  ingestEndpoints?: Array<mediapackage_ChannelHlsIngestIngestEndpoint>;
}

export function mediapackage_ChannelHlsIngest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'ingestEndpoints',
      'A list of the ingest endpoints',
      () => mediapackage_ChannelHlsIngestIngestEndpoint_GetTypes(),
      false,
      false,
    ),
  ];
}
