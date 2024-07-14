import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  rds_OptionGroupOptionOptionSetting,
  rds_OptionGroupOptionOptionSetting_GetTypes,
} from "./rds_OptionGroupOptionOptionSetting";

export interface rds_OptionGroupOption {
  // The option settings to apply. See `option_settings` Block below for more details.
  optionSettings?: Array<rds_OptionGroupOptionOptionSetting>;

  // Port number when connecting to the option (e.g., 11211). Leaving out or removing `port` from your configuration does not remove or clear a port from the option in AWS. AWS may assign a default port. Not including `port` in your configuration means that the AWS provider will ignore a previously set value, a value set by AWS, and any port changes.
  port?: number;

  // Version of the option (e.g., 13.1.0.0). Leaving out or removing `version` from your configuration does not remove or clear a version from the option in AWS. AWS may assign a default version. Not including `version` in your configuration means that the AWS provider will ignore a previously set value, a value set by AWS, and any version changes.
  version?: string;

  // List of VPC Security Groups for which the option is enabled.
  vpcSecurityGroupMemberships?: Array<string>;

  // List of DB Security Groups for which the option is enabled.
  dbSecurityGroupMemberships?: Array<string>;

  // Name of the option (e.g., MEMCACHED).
  optionName?: string;
}

export function rds_OptionGroupOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "optionName",
      "Name of the option (e.g., MEMCACHED).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "optionSettings",
      "The option settings to apply. See `option_settings` Block below for more details.",
      rds_OptionGroupOptionOptionSetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number when connecting to the option (e.g., 11211). Leaving out or removing `port` from your configuration does not remove or clear a port from the option in AWS. AWS may assign a default port. Not including `port` in your configuration means that the AWS provider will ignore a previously set value, a value set by AWS, and any port changes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "Version of the option (e.g., 13.1.0.0). Leaving out or removing `version` from your configuration does not remove or clear a version from the option in AWS. AWS may assign a default version. Not including `version` in your configuration means that the AWS provider will ignore a previously set value, a value set by AWS, and any version changes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vpcSecurityGroupMemberships",
      "List of VPC Security Groups for which the option is enabled.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dbSecurityGroupMemberships",
      "List of DB Security Groups for which the option is enabled.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
