import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ProtectionGroupArgs {
  // Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.
  aggregation?: string;

  // The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set `pattern` to ARBITRARY and you must not set it for any other `pattern` setting.
  members?: Array<string>;

  // The criteria to use to choose the protected resources for inclusion in the group.
  pattern?: string;

  // The name of the protection group.
  protectionGroupId?: string;

  // The resource type to include in the protection group. You must set this when you set `pattern` to BY_RESOURCE_TYPE and you must not set it for any other `pattern` setting.
  resourceType?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ProtectionGroup extends Resource {
  // The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set `pattern` to ARBITRARY and you must not set it for any other `pattern` setting.
  public members?: Array<string>;

  // The criteria to use to choose the protected resources for inclusion in the group.
  public pattern?: string;

  // The ARN (Amazon Resource Name) of the protection group.
  public protectionGroupArn?: string;

  // The name of the protection group.
  public protectionGroupId?: string;

  // The resource type to include in the protection group. You must set this when you set `pattern` to BY_RESOURCE_TYPE and you must not set it for any other `pattern` setting.
  public resourceType?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.
  public aggregation?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "pattern",
        "The criteria to use to choose the protected resources for inclusion in the group.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "protectionGroupId",
        "The name of the protection group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceType",
        "The resource type to include in the protection group. You must set this when you set `pattern` to BY_RESOURCE_TYPE and you must not set it for any other `pattern` setting.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "aggregation",
        "Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "members",
        "The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set `pattern` to ARBITRARY and you must not set it for any other `pattern` setting.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
