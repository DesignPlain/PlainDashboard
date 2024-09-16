import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkmanager_LinkBandwidth {
  // Download speed in Mbps.
  downloadSpeed?: number;

  // Upload speed in Mbps.
  uploadSpeed?: number;
}

export function networkmanager_LinkBandwidth_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'downloadSpeed',
      'Download speed in Mbps.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'uploadSpeed',
      'Upload speed in Mbps.',
      () => [],
      false,
      false,
    ),
  ];
}
