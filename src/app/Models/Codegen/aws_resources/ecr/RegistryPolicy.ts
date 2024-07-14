import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface RegistryPolicyArgs {
  // The policy document. This is a JSON formatted string.
  policy?: string;
}
export class RegistryPolicy extends Resource {
  // The policy document. This is a JSON formatted string.
  public policy?: string;

  // The registry ID where the registry was created.
  public registryId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The policy document. This is a JSON formatted string.",
        [],
        true,
        false,
      ),
    ];
  }
}
