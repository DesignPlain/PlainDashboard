import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  organizations_OrganizationalUnitAccount,
  organizations_OrganizationalUnitAccount_GetTypes,
} from "../types/organizations_OrganizationalUnitAccount";

export interface OrganizationalUnitArgs {
  // The name for the organizational unit
  name?: string;

  // ID of the parent organizational unit, which may be the root
  parentId?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class OrganizationalUnit extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // List of child accounts for this Organizational Unit. Does not return account information for child Organizational Units. All elements have these attributes:
  public accounts?: Array<organizations_OrganizationalUnitAccount>;

  // ARN of the organizational unit
  public arn?: string;

  // The name for the organizational unit
  public name?: string;

  // ID of the parent organizational unit, which may be the root
  public parentId?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the organizational unit",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parentId",
        "ID of the parent organizational unit, which may be the root",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
