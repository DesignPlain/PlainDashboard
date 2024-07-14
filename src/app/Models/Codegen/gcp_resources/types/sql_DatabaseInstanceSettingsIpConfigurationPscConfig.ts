import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sql_DatabaseInstanceSettingsIpConfigurationPscConfig {
  // List of consumer projects that are allow-listed for PSC connections to this instance. This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric).
  allowedConsumerProjects?: Array<string>;

  // Whether PSC connectivity is enabled for this instance.
  pscEnabled?: boolean;
}

export function sql_DatabaseInstanceSettingsIpConfigurationPscConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedConsumerProjects",
      "List of consumer projects that are allow-listed for PSC connections to this instance. This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric).",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "pscEnabled",
      "Whether PSC connectivity is enabled for this instance.",
      [],
      false,
      false,
    ),
  ];
}
