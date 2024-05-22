import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  auditmanager_ControlControlMappingSource,
  auditmanager_ControlControlMappingSource_GetTypes,
} from "../types/auditmanager_ControlControlMappingSource";

export interface ControlArgs {
  // Description of the control.
  description?: string;

  // Name of the control.
  name?: string;

  // A map of tags to assign to the control. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Steps to follow to determine if the control is satisfied.
  testingInformation?: string;

  // Recommended actions to carry out if the control isn't fulfilled.
  actionPlanInstructions?: string;

  // Title of the action plan for remediating the control.
  actionPlanTitle?: string;

  /*
Data mapping sources. See `control_mapping_sources` below.

The following arguments are optional:
*/
  controlMappingSources?: Array<auditmanager_ControlControlMappingSource>;
}
export class Control extends Resource {
  // Title of the action plan for remediating the control.
  public actionPlanTitle?: string;

  //
  public tagsAll?: Map<string, string>;

  // Description of the control.
  public description?: string;

  // Name of the control.
  public name?: string;

  // A map of tags to assign to the control. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Steps to follow to determine if the control is satisfied.
  public testingInformation?: string;

  // Type of control, such as a custom control or a standard control.
  public type?: string;

  // Recommended actions to carry out if the control isn't fulfilled.
  public actionPlanInstructions?: string;

  /*
Amazon Resource Name (ARN) of the control.
- `control_mapping_sources.-.source_id` - Unique identifier for the source.
*/
  public arn?: string;

  /*
Data mapping sources. See `control_mapping_sources` below.

The following arguments are optional:
*/
  public controlMappingSources?: Array<auditmanager_ControlControlMappingSource>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the control.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the control.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the control. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "testingInformation",
        "Steps to follow to determine if the control is satisfied.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "actionPlanInstructions",
        "Recommended actions to carry out if the control isn't fulfilled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "actionPlanTitle",
        "Title of the action plan for remediating the control.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "controlMappingSources",
        "Data mapping sources. See `control_mapping_sources` below.\n\nThe following arguments are optional:",
        auditmanager_ControlControlMappingSource_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
