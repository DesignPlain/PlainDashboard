import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cognito_IdentityPoolRoleAttachmentRoleMapping,
  cognito_IdentityPoolRoleAttachmentRoleMapping_GetTypes,
} from "../types/cognito_IdentityPoolRoleAttachmentRoleMapping";

export interface IdentityPoolRoleAttachmentArgs {
  // An identity pool ID in the format `REGION_GUID`.
  identityPoolId?: string;

  // A List of Role Mapping.
  roleMappings?: Array<cognito_IdentityPoolRoleAttachmentRoleMapping>;

  // The map of roles associated with this pool. For a given role, the key will be either "authenticated" or "unauthenticated" and the value will be the Role ARN.
  roles?: Map<string, string>;
}
export class IdentityPoolRoleAttachment extends DS_Resource {
  // An identity pool ID in the format `REGION_GUID`.
  public identityPoolId?: string;

  // A List of Role Mapping.
  public roleMappings?: Array<cognito_IdentityPoolRoleAttachmentRoleMapping>;

  // The map of roles associated with this pool. For a given role, the key will be either "authenticated" or "unauthenticated" and the value will be the Role ARN.
  public roles?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "identityPoolId",
        "An identity pool ID in the format `REGION_GUID`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "roleMappings",
        "A List of Role Mapping.",
        () => cognito_IdentityPoolRoleAttachmentRoleMapping_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "roles",
        'The map of roles associated with this pool. For a given role, the key will be either "authenticated" or "unauthenticated" and the value will be the Role ARN.',
        () => InputType_Map_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
