import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RegionSettingsArgs {
  // A map of services along with the management preferences for the Region. For more information, see the [AWS Documentation](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRegionSettings.html#API_UpdateRegionSettings_RequestSyntax).
  resourceTypeManagementPreference?: Map<string, boolean>;

  // A map of services along with the opt-in preferences for the Region.
  resourceTypeOptInPreference?: Map<string, boolean>;
}
export class RegionSettings extends DS_Resource {
  // A map of services along with the management preferences for the Region. For more information, see the [AWS Documentation](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRegionSettings.html#API_UpdateRegionSettings_RequestSyntax).
  public resourceTypeManagementPreference?: Map<string, boolean>;

  // A map of services along with the opt-in preferences for the Region.
  public resourceTypeOptInPreference?: Map<string, boolean>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "resourceTypeManagementPreference",
        "A map of services along with the management preferences for the Region. For more information, see the [AWS Documentation](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRegionSettings.html#API_UpdateRegionSettings_RequestSyntax).",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "resourceTypeOptInPreference",
        "A map of services along with the opt-in preferences for the Region.",
        () => InputType_Map_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
