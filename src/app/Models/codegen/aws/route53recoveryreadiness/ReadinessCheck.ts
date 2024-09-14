import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ReadinessCheckArgs {
  // Unique name describing the readiness check.
  readinessCheckName?: string;

  /*
Name describing the resource set that will be monitored for readiness.

The following arguments are optional:
*/
  resourceSetName?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  tags?: Map<string, string>;
}
export class ReadinessCheck extends DS_Resource {
  // ARN of the readiness_check
  public arn?: string;

  // Unique name describing the readiness check.
  public readinessCheckName?: string;

  /*
Name describing the resource set that will be monitored for readiness.

The following arguments are optional:
*/
  public resourceSetName?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "readinessCheckName",
        "Unique name describing the readiness check.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceSetName",
        "Name describing the resource set that will be monitored for readiness.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
