import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ResourcePolicyArgs {
  // Indicates that you are using both methods to grant cross-account. Valid values are `TRUE` and `FALSE`. Note the provider will not perform drift detetction on this field as its not return on read.
  enableHybrid?: string;

  // The policy to be applied to the aws glue data catalog.
  policy?: string;
}
export class ResourcePolicy extends Resource {
  // The policy to be applied to the aws glue data catalog.
  public policy?: string;

  // Indicates that you are using both methods to grant cross-account. Valid values are `TRUE` and `FALSE`. Note the provider will not perform drift detetction on this field as its not return on read.
  public enableHybrid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "enableHybrid",
        "Indicates that you are using both methods to grant cross-account. Valid values are `TRUE` and `FALSE`. Note the provider will not perform drift detetction on this field as its not return on read.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The policy to be applied to the aws glue data catalog.",
        [],
        true,
        false,
      ),
    ];
  }
}
