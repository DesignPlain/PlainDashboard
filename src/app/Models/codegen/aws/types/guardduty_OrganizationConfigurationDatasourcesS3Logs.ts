import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface guardduty_OrganizationConfigurationDatasourcesS3Logs {
  // Set to `true` if you want S3 data event logs to be automatically enabled for new members of the organization. Default: `false`
  autoEnable?: boolean;
}

export function guardduty_OrganizationConfigurationDatasourcesS3Logs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'autoEnable',
      'Set to `true` if you want S3 data event logs to be automatically enabled for new members of the organization. Default: `false`',
      () => [],
      true,
      false,
    ),
  ];
}
