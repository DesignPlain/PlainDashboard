import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GlobalSettingsArgs {
  // A list of resources along with the opt-in preferences for the account.
  globalSettings?: Map<string, string>;
}
export class GlobalSettings extends Resource {
  // A list of resources along with the opt-in preferences for the account.
  public globalSettings?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "globalSettings",
        "A list of resources along with the opt-in preferences for the account.",
        InputType_Map_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
