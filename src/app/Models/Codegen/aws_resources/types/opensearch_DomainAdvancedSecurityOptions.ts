import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opensearch_DomainAdvancedSecurityOptionsMasterUserOptions,
  opensearch_DomainAdvancedSecurityOptionsMasterUserOptions_GetTypes,
} from "./opensearch_DomainAdvancedSecurityOptionsMasterUserOptions";

export interface opensearch_DomainAdvancedSecurityOptions {
  // Whether advanced security is enabled.
  enabled?: boolean;

  // Whether the internal user database is enabled. Default is `false`.
  internalUserDatabaseEnabled?: boolean;

  // Configuration block for the main user. Detailed below.
  masterUserOptions?: opensearch_DomainAdvancedSecurityOptionsMasterUserOptions;

  // Whether Anonymous auth is enabled. Enables fine-grained access control on an existing domain. Ignored unless `advanced_security_options` are enabled. _Can only be enabled on an existing domain._
  anonymousAuthEnabled?: boolean;
}

export function opensearch_DomainAdvancedSecurityOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether advanced security is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "internalUserDatabaseEnabled",
      "Whether the internal user database is enabled. Default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "masterUserOptions",
      "Configuration block for the main user. Detailed below.",
      opensearch_DomainAdvancedSecurityOptionsMasterUserOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "anonymousAuthEnabled",
      "Whether Anonymous auth is enabled. Enables fine-grained access control on an existing domain. Ignored unless `advanced_security_options` are enabled. _Can only be enabled on an existing domain._",
      [],
      false,
      false,
    ),
  ];
}
