import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  verifiedaccess_InstanceLoggingConfigurationAccessLogs,
  verifiedaccess_InstanceLoggingConfigurationAccessLogs_GetTypes,
} from "../types/verifiedaccess_InstanceLoggingConfigurationAccessLogs";

export interface InstanceLoggingConfigurationArgs {
  // A block that specifies the configuration options for Verified Access instances. Detailed below.
  accessLogs?: verifiedaccess_InstanceLoggingConfigurationAccessLogs;

  // The ID of the Verified Access instance.
  verifiedaccessInstanceId?: string;
}
export class InstanceLoggingConfiguration extends Resource {
  // A block that specifies the configuration options for Verified Access instances. Detailed below.
  public accessLogs?: verifiedaccess_InstanceLoggingConfigurationAccessLogs;

  // The ID of the Verified Access instance.
  public verifiedaccessInstanceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "accessLogs",
        "A block that specifies the configuration options for Verified Access instances. Detailed below.",
        verifiedaccess_InstanceLoggingConfigurationAccessLogs_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "verifiedaccessInstanceId",
        "The ID of the Verified Access instance.",
        [],
        true,
        true,
      ),
    ];
  }
}
