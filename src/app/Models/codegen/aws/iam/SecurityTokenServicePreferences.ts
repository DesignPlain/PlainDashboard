import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SecurityTokenServicePreferencesArgs {
  // The version of the STS global endpoint token. Valid values: `v1Token`, `v2Token`.
  globalEndpointTokenVersion?: string;
}
export class SecurityTokenServicePreferences extends DS_Resource {
  // The version of the STS global endpoint token. Valid values: `v1Token`, `v2Token`.
  public globalEndpointTokenVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "globalEndpointTokenVersion",
        "The version of the STS global endpoint token. Valid values: `v1Token`, `v2Token`.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
