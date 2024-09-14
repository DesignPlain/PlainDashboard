import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  verifiedpermissions_IdentitySourceConfiguration,
  verifiedpermissions_IdentitySourceConfiguration_GetTypes,
} from "../types/verifiedpermissions_IdentitySourceConfiguration";

export interface IdentitySourceArgs {
  // Specifies the details required to communicate with the identity provider (IdP) associated with this identity source. See Configuration below.
  configuration?: verifiedpermissions_IdentitySourceConfiguration;

  // Specifies the ID of the policy store in which you want to store this identity source.
  policyStoreId?: string;

  // Specifies the namespace and data type of the principals generated for identities authenticated by the new identity source.
  principalEntityType?: string;
}
export class IdentitySource extends DS_Resource {
  // Specifies the ID of the policy store in which you want to store this identity source.
  public policyStoreId?: string;

  // Specifies the namespace and data type of the principals generated for identities authenticated by the new identity source.
  public principalEntityType?: string;

  // Specifies the details required to communicate with the identity provider (IdP) associated with this identity source. See Configuration below.
  public configuration?: verifiedpermissions_IdentitySourceConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "configuration",
        "Specifies the details required to communicate with the identity provider (IdP) associated with this identity source. See Configuration below.",
        () => verifiedpermissions_IdentitySourceConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyStoreId",
        "Specifies the ID of the policy store in which you want to store this identity source.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "principalEntityType",
        "Specifies the namespace and data type of the principals generated for identities authenticated by the new identity source.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
