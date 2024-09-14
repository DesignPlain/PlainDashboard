import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface GlobalSettingsArgs {
  // A list of resources along with the opt-in preferences for the account.
  globalSettings?: Map<string, string>;
}
export class GlobalSettings extends DS_Resource {
  // A list of resources along with the opt-in preferences for the account.
  public globalSettings?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "globalSettings",
        "A list of resources along with the opt-in preferences for the account.",
        () => InputType_Map_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
