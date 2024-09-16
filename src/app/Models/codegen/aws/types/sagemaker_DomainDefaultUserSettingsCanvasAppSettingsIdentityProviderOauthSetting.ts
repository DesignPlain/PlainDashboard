import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_DomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSetting {
  // The name of the data source that you're connecting to. Canvas currently supports OAuth for Snowflake and Salesforce Data Cloud. Valid values are `SalesforceGenie` and `Snowflake`.
  dataSourceName?: string;

  // The ARN of an Amazon Web Services Secrets Manager secret that stores the credentials from your identity provider, such as the client ID and secret, authorization URL, and token URL.
  secretArn?: string;

  // Describes whether OAuth for a data source is enabled or disabled in the Canvas application. Valid values are `ENABLED` and `DISABLED`.
  status?: string;
}

export function sagemaker_DomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'dataSourceName',
      "The name of the data source that you're connecting to. Canvas currently supports OAuth for Snowflake and Salesforce Data Cloud. Valid values are `SalesforceGenie` and `Snowflake`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'secretArn',
      'The ARN of an Amazon Web Services Secrets Manager secret that stores the credentials from your identity provider, such as the client ID and secret, authorization URL, and token URL.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'status',
      'Describes whether OAuth for a data source is enabled or disabled in the Canvas application. Valid values are `ENABLED` and `DISABLED`.',
      () => [],
      false,
      false,
    ),
  ];
}
