import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appsync_DataSourceHttpConfigAuthorizationConfigAwsIamConfig {
  // Signing Amazon Web Services Region for IAM authorization.
  signingRegion?: string;

  // Signing service name for IAM authorization.
  signingServiceName?: string;
}

export function appsync_DataSourceHttpConfigAuthorizationConfigAwsIamConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'signingRegion',
      'Signing Amazon Web Services Region for IAM authorization.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'signingServiceName',
      'Signing service name for IAM authorization.',
      () => [],
      false,
      false,
    ),
  ];
}
