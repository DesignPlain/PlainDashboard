import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PackageAssociationArgs {
  // Name of the domain to associate the package with.
  domainName?: string;

  // Internal ID of the package to associate with a domain.
  packageId?: string;
}
export class PackageAssociation extends Resource {
  // Internal ID of the package to associate with a domain.
  public packageId?: string;

  //
  public referencePath?: string;

  // Name of the domain to associate the package with.
  public domainName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Name of the domain to associate the package with.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "packageId",
        "Internal ID of the package to associate with a domain.",
        [],
        true,
        true,
      ),
    ];
  }
}
