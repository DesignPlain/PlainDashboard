import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  verifiedpermissions_PolicyDefinition,
  verifiedpermissions_PolicyDefinition_GetTypes,
} from "../types/verifiedpermissions_PolicyDefinition";

export interface PolicyArgs {
  // The definition of the policy. See Definition below.
  definition?: verifiedpermissions_PolicyDefinition;

  // The Policy Store ID of the policy store.
  policyStoreId?: string;
}
export class Policy extends DS_Resource {
  // The Policy Store ID of the policy store.
  public policyStoreId?: string;

  // The date the policy was created.
  public createdDate?: string;

  // The definition of the policy. See Definition below.
  public definition?: verifiedpermissions_PolicyDefinition;

  // The Policy ID of the policy.
  public policyId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "definition",
        "The definition of the policy. See Definition below.",
        () => verifiedpermissions_PolicyDefinition_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyStoreId",
        "The Policy Store ID of the policy store.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
