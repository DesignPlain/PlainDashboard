import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface OrganizationsAccessArgs {
  // Whether to enable AWS Organizations access.
  enabled?: boolean;
}
export class OrganizationsAccess extends Resource {
  // Whether to enable AWS Organizations access.
  public enabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether to enable AWS Organizations access.",
        [],
        true,
        true,
      ),
    ];
  }
}
