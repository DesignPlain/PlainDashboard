import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  elasticbeanstalk_ConfigurationTemplateSetting,
  elasticbeanstalk_ConfigurationTemplateSetting_GetTypes,
} from "../types/elasticbeanstalk_ConfigurationTemplateSetting";

export interface ConfigurationTemplateArgs {
  // name of the application to associate with this configuration template
  application?: string;

  // Short description of the Template
  description?: string;

  // The ID of the environment used with this configuration template
  environmentId?: string;

  // A unique name for this Template.
  name?: string;

  /*
Option settings to configure the new Environment. These
override specific values that are set as defaults. The format is detailed
below in Option Settings
*/
  settings?: Array<elasticbeanstalk_ConfigurationTemplateSetting>;

  /*
A solution stack to base your Template
off of. Example stacks can be found in the [Amazon API documentation][1]
*/
  solutionStackName?: string;
}
export class ConfigurationTemplate extends Resource {
  /*
A solution stack to base your Template
off of. Example stacks can be found in the [Amazon API documentation][1]
*/
  public solutionStackName?: string;

  // name of the application to associate with this configuration template
  public application?: string;

  // Short description of the Template
  public description?: string;

  // The ID of the environment used with this configuration template
  public environmentId?: string;

  // A unique name for this Template.
  public name?: string;

  /*
Option settings to configure the new Environment. These
override specific values that are set as defaults. The format is detailed
below in Option Settings
*/
  public settings?: Array<elasticbeanstalk_ConfigurationTemplateSetting>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "application",
        "name of the application to associate with this configuration template",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Short description of the Template",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "environmentId",
        "The ID of the environment used with this configuration template",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A unique name for this Template.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "settings",
        "Option settings to configure the new Environment. These\noverride specific values that are set as defaults. The format is detailed\nbelow in Option Settings",
        elasticbeanstalk_ConfigurationTemplateSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "solutionStackName",
        "A solution stack to base your Template\noff of. Example stacks can be found in the [Amazon API documentation][1]",
        [],
        false,
        true,
      ),
    ];
  }
}
