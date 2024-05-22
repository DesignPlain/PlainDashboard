import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opensearch_getDomainAdvancedSecurityOption {
  //
  anonymousAuthEnabled?: boolean;

  // Enabled disabled toggle for off-peak update window
  enabled?: boolean;

  // Whether the internal user database is enabled.
  internalUserDatabaseEnabled?: boolean;
}

export function opensearch_getDomainAdvancedSecurityOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "anonymousAuthEnabled",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enabled disabled toggle for off-peak update window",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "internalUserDatabaseEnabled",
      "Whether the internal user database is enabled.",
      [],
      true,
      false,
    ),
  ];
}
