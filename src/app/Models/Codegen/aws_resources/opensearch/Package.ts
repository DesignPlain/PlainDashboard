import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opensearch_PackagePackageSource,
  opensearch_PackagePackageSource_GetTypes,
} from "../types/opensearch_PackagePackageSource";

export interface PackageArgs {
  // Unique name for the package.
  packageName?: string;

  // Configuration block for the package source options.
  packageSource?: opensearch_PackagePackageSource;

  // The type of package.
  packageType?: string;

  // Description of the package.
  packageDescription?: string;
}
export class Package extends Resource {
  // Configuration block for the package source options.
  public packageSource?: opensearch_PackagePackageSource;

  // The type of package.
  public packageType?: string;

  // The current version of the package.
  public availablePackageVersion?: string;

  // Description of the package.
  public packageDescription?: string;

  //
  public packageId?: string;

  // Unique name for the package.
  public packageName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "packageSource",
        "Configuration block for the package source options.",
        opensearch_PackagePackageSource_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "packageType",
        "The type of package.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "packageDescription",
        "Description of the package.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "packageName",
        "Unique name for the package.",
        [],
        true,
        true,
      ),
    ];
  }
}
