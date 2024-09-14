import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RegistryPolicyArgs {
  // Resource Policy for EventBridge Schema Registry
  policy?: string;

  // Name of EventBridge Schema Registry
  registryName?: string;
}
export class RegistryPolicy extends DS_Resource {
  // Resource Policy for EventBridge Schema Registry
  public policy?: string;

  // Name of EventBridge Schema Registry
  public registryName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "Resource Policy for EventBridge Schema Registry",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "registryName",
        "Name of EventBridge Schema Registry",
        () => [],
        true,
        true,
      ),
    ];
  }
}
