import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SecurityTokenServicePreferencesArgs {
  // The version of the STS global endpoint token. Valid values: `v1Token`, `v2Token`.
  globalEndpointTokenVersion?: string;
}
export class SecurityTokenServicePreferences extends Resource {
  // The version of the STS global endpoint token. Valid values: `v1Token`, `v2Token`.
  public globalEndpointTokenVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "globalEndpointTokenVersion",
        "The version of the STS global endpoint token. Valid values: `v1Token`, `v2Token`.",
        [],
        true,
        false,
      ),
    ];
  }
}
