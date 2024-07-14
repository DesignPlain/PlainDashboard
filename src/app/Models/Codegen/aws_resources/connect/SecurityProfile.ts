import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SecurityProfileArgs {
  // Specifies the description of the Security Profile.
  description?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  instanceId?: string;

  // Specifies the name of the Security Profile.
  name?: string;

  // Specifies a list of permissions assigned to the security profile.
  permissions?: Array<string>;

  /*
Tags to apply to the Security Profile. If configured with a provider
`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
*/
  tags?: Map<string, string>;
}
export class SecurityProfile extends Resource {
  // Specifies the description of the Security Profile.
  public description?: string;

  // Specifies the name of the Security Profile.
  public name?: string;

  // Specifies a list of permissions assigned to the security profile.
  public permissions?: Array<string>;

  /*
Tags to apply to the Security Profile. If configured with a provider
`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
*/
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the Security Profile.
  public arn?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  // The organization resource identifier for the security profile.
  public organizationResourceId?: string;

  // The identifier for the Security Profile.
  public securityProfileId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "permissions",
        "Specifies a list of permissions assigned to the security profile.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the Security Profile. If configured with a provider\n`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Specifies the description of the Security Profile.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "Specifies the identifier of the hosting Amazon Connect Instance.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Specifies the name of the Security Profile.",
        [],
        false,
        true,
      ),
    ];
  }
}
