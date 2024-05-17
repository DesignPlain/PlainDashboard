import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SharedVPCServiceProjectArgs {
  // The deletion policy for the shared VPC service. Setting ABANDON allows the resource to be abandoned rather than deleted. Possible values are: "ABANDON".
  DeletionPolicy?: string;

  // The ID of a host project to associate.
  HostProject?: string;

  // The ID of the project that will serve as a Shared VPC service project.
  ServiceProject?: string;
}
export class SharedVPCServiceProject extends Resource {
  // The ID of a host project to associate.
  public HostProject?: string;

  // The ID of the project that will serve as a Shared VPC service project.
  public ServiceProject?: string;

  // The deletion policy for the shared VPC service. Setting ABANDON allows the resource to be abandoned rather than deleted. Possible values are: "ABANDON".
  public DeletionPolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        'The deletion policy for the shared VPC service. Setting ABANDON allows the resource to be abandoned rather than deleted. Possible values are: "ABANDON".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "HostProject",
        "The ID of a host project to associate.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceProject",
        "The ID of the project that will serve as a Shared VPC service project.",
        [],
        true,
        true,
      ),
    ];
  }
}
