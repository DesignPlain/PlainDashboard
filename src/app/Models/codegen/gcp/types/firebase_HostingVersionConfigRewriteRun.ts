import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface firebase_HostingVersionConfigRewriteRun {
  // Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied.
  region?: string;

  // User-defined ID of the Cloud Run service.
  serviceId?: string;
}

export function firebase_HostingVersionConfigRewriteRun_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'region',
      'Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceId',
      'User-defined ID of the Cloud Run service.',
      () => [],
      true,
      true,
    ),
  ];
}
