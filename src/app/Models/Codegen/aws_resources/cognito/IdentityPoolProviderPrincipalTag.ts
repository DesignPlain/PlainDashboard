import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface IdentityPoolProviderPrincipalTagArgs {
  // An identity pool ID.
  identityPoolId?: string;

  // The name of the identity provider.
  identityProviderName?: string;

  // String to string map of variables.
  principalTags?: Map<string, string>;

  // use default (username and clientID) attribute mappings.
  useDefaults?: boolean;
}
export class IdentityPoolProviderPrincipalTag extends Resource {
  // An identity pool ID.
  public identityPoolId?: string;

  // The name of the identity provider.
  public identityProviderName?: string;

  // String to string map of variables.
  public principalTags?: Map<string, string>;

  // use default (username and clientID) attribute mappings.
  public useDefaults?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "principalTags",
        "String to string map of variables.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "useDefaults",
        "use default (username and clientID) attribute mappings.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityPoolId",
        "An identity pool ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityProviderName",
        "The name of the identity provider.",
        [],
        true,
        true,
      ),
    ];
  }
}
