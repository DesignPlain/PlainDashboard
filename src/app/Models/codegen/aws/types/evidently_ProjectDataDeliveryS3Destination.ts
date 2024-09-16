import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface evidently_ProjectDataDeliveryS3Destination {
  // The name of the bucket in which Evidently stores evaluation events.
  bucket?: string;

  // The bucket prefix in which Evidently stores evaluation events.
  prefix?: string;
}

export function evidently_ProjectDataDeliveryS3Destination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucket',
      'The name of the bucket in which Evidently stores evaluation events.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'prefix',
      'The bucket prefix in which Evidently stores evaluation events.',
      () => [],
      false,
      false,
    ),
  ];
}
