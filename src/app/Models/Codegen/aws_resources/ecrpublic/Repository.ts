import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ecrpublic_RepositoryCatalogData,
  ecrpublic_RepositoryCatalogData_GetTypes,
} from "../types/ecrpublic_RepositoryCatalogData";

export interface RepositoryArgs {
  // Catalog data configuration for the repository. See below for schema.
  catalogData?: ecrpublic_RepositoryCatalogData;

  //
  forceDestroy?: boolean;

  // Name of the repository.
  repositoryName?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Repository extends Resource {
  // The URI of the repository.
  public repositoryUri?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Full ARN of the repository.
  public arn?: string;

  // Catalog data configuration for the repository. See below for schema.
  public catalogData?: ecrpublic_RepositoryCatalogData;

  //
  public forceDestroy?: boolean;

  // The registry ID where the repository was created.
  public registryId?: string;

  // Name of the repository.
  public repositoryName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "catalogData",
        "Catalog data configuration for the repository. See below for schema.",
        ecrpublic_RepositoryCatalogData_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(InputType.Bool, "forceDestroy", "", [], false, false),
      new DynamicUIProps(
        InputType.String,
        "repositoryName",
        "Name of the repository.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
