import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface elasticsearch_DomainAdvancedSecurityOptionsMasterUserOptions {
  // ARN for the main user. Only specify if `internal_user_database_enabled` is not set or set to `false`.
  masterUserArn?: string;

  // Main user's username, which is stored in the Amazon Elasticsearch Service domain's internal database. Only specify if `internal_user_database_enabled` is set to `true`.
  masterUserName?: string;

  // Main user's password, which is stored in the Amazon Elasticsearch Service domain's internal database. Only specify if `internal_user_database_enabled` is set to `true`.
  masterUserPassword?: string;
}

export function elasticsearch_DomainAdvancedSecurityOptionsMasterUserOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'masterUserName',
      "Main user's username, which is stored in the Amazon Elasticsearch Service domain's internal database. Only specify if `internal_user_database_enabled` is set to `true`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'masterUserPassword',
      "Main user's password, which is stored in the Amazon Elasticsearch Service domain's internal database. Only specify if `internal_user_database_enabled` is set to `true`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'masterUserArn',
      'ARN for the main user. Only specify if `internal_user_database_enabled` is not set or set to `false`.',
      () => [],
      false,
      false,
    ),
  ];
}
