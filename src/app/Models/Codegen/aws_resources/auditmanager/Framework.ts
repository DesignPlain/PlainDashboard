import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  auditmanager_FrameworkControlSet,
  auditmanager_FrameworkControlSet_GetTypes,
} from "../types/auditmanager_FrameworkControlSet";

export interface FrameworkArgs {
  // Compliance type that the new custom framework supports, such as `CIS` or `HIPAA`.
  complianceType?: string;

  /*
Control sets that are associated with the framework. See `control_sets` below.

The following arguments are optional:
*/
  controlSets?: Array<auditmanager_FrameworkControlSet>;

  // Description of the framework.
  description?: string;

  // Name of the framework.
  name?: string;

  // A map of tags to assign to the framework. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Framework extends Resource {
  // Framework type, such as a custom framework or a standard framework.
  public frameworkType?: string;

  // Name of the framework.
  public name?: string;

  // A map of tags to assign to the framework. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  /*
Amazon Resource Name (ARN) of the framework.
- `control_sets[-].id` - Unique identifier for the framework control set.
*/
  public arn?: string;

  // Compliance type that the new custom framework supports, such as `CIS` or `HIPAA`.
  public complianceType?: string;

  /*
Control sets that are associated with the framework. See `control_sets` below.

The following arguments are optional:
*/
  public controlSets?: Array<auditmanager_FrameworkControlSet>;

  // Description of the framework.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "complianceType",
        "Compliance type that the new custom framework supports, such as `CIS` or `HIPAA`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "controlSets",
        "Control sets that are associated with the framework. See `control_sets` below.\n\nThe following arguments are optional:",
        auditmanager_FrameworkControlSet_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the framework.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the framework.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the framework. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
