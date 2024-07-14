import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opensearch_DomainAdvancedSecurityOptionsMasterUserOptions {
  // ARN for the main user. Only specify if `internal_user_database_enabled` is not set or set to `false`.
  masterUserArn?: string;

  // Main user's username, which is stored in the Amazon OpenSearch Service domain's internal database. Only specify if `internal_user_database_enabled` is set to `true`.
  masterUserName?: string;

  // Main user's password, which is stored in the Amazon OpenSearch Service domain's internal database. Only specify if `internal_user_database_enabled` is set to `true`.
  masterUserPassword?: string;
}

export function opensearch_DomainAdvancedSecurityOptionsMasterUserOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "masterUserArn",
      "ARN for the main user. Only specify if `internal_user_database_enabled` is not set or set to `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "masterUserName",
      "Main user's username, which is stored in the Amazon OpenSearch Service domain's internal database. Only specify if `internal_user_database_enabled` is set to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "masterUserPassword",
      "Main user's password, which is stored in the Amazon OpenSearch Service domain's internal database. Only specify if `internal_user_database_enabled` is set to `true`.",
      [],
      false,
      false,
    ),
  ];
}
