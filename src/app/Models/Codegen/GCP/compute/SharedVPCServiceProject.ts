import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SharedVPCServiceProjectArgs {
  // The ID of a host project to associate.
  HostProject?: string;

  // The ID of the project that will serve as a Shared VPC service project.
  ServiceProject?: string;

  // The deletion policy for the shared VPC service. Setting ABANDON allows the resource to be abandoned rather than deleted. Possible values are: "ABANDON".
  DeletionPolicy?: string;
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
        "HostProject",
        "The ID of a host project to associate.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceProject",
        "The ID of the project that will serve as a Shared VPC service project.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        'The deletion policy for the shared VPC service. Setting ABANDON allows the resource to be abandoned rather than deleted. Possible values are: "ABANDON".',
      ),
    ];
  }
}
