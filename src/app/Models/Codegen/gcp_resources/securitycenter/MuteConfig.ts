import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface MuteConfigArgs {
  // A description of the mute config.
  description?: string;

  /*
An expression that defines the filter to apply across create/update
events of findings. While creating a filter string, be mindful of
the scope in which the mute configuration is being created. E.g.,
If a filter contains project = X but is created under the
project = Y scope, it might not match any findings.
*/
  filter?: string;

  // Unique identifier provided by the client within the parent scope.
  muteConfigId?: string;

  /*
Resource name of the new mute configs's parent. Its format is
"organizations/[organization_id]", "folders/[folder_id]", or
"projects/[project_id]".


- - -
*/
  parent?: string;
}
export class MuteConfig extends Resource {
  /*
Email address of the user who last edited the mute config. This
field is set by the server and will be ignored if provided on
config creation or update.
*/
  public mostRecentEditor?: string;

  // Unique identifier provided by the client within the parent scope.
  public muteConfigId?: string;

  /*
Name of the mute config. Its format is
organizations/{organization}/muteConfigs/{configId},
folders/{folder}/muteConfigs/{configId},
or projects/{project}/muteConfigs/{configId}
*/
  public name?: string;

  /*
Resource name of the new mute configs's parent. Its format is
"organizations/[organization_id]", "folders/[folder_id]", or
"projects/[project_id]".


- - -
*/
  public parent?: string;

  /*
Output only. The most recent time at which the mute config was
updated. This field is set by the server and will be ignored if
provided on config creation or update.
*/
  public updateTime?: string;

  /*
The time at which the mute config was created. This field is set by
the server and will be ignored if provided on config creation.
*/
  public createTime?: string;

  // A description of the mute config.
  public description?: string;

  /*
An expression that defines the filter to apply across create/update
events of findings. While creating a filter string, be mindful of
the scope in which the mute configuration is being created. E.g.,
If a filter contains project = X but is created under the
project = Y scope, it might not match any findings.
*/
  public filter?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the mute config.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "filter",
        "An expression that defines the filter to apply across create/update\nevents of findings. While creating a filter string, be mindful of\nthe scope in which the mute configuration is being created. E.g.,\nIf a filter contains project = X but is created under the\nproject = Y scope, it might not match any findings.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "muteConfigId",
        "Unique identifier provided by the client within the parent scope.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        'Resource name of the new mute configs\'s parent. Its format is\n"organizations/[organization_id]", "folders/[folder_id]", or\n"projects/[project_id]".\n\n\n- - -',
        [],
        true,
        true,
      ),
    ];
  }
}
