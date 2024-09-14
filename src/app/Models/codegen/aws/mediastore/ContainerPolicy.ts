import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ContainerPolicyArgs {
  // The name of the container.
  containerName?: string;

  // The contents of the policy.
  policy?: string;
}
export class ContainerPolicy extends DS_Resource {
  // The name of the container.
  public containerName?: string;

  // The contents of the policy.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "containerName",
        "The name of the container.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The contents of the policy.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
