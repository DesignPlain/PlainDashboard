import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface MuteConfigArgs {
  /*
An expression that defines the filter to apply across create/update
events of findings. While creating a filter string, be mindful of
the scope in which the mute configuration is being created. E.g.,
If a filter contains project = X but is created under the
project = Y scope, it might not match any findings.
*/
  Filter?: string;

  // Unique identifier provided by the client within the parent scope.
  MuteConfigId?: string;

  /*
Resource name of the new mute configs's parent. Its format is
"organizations/[organization_id]", "folders/[folder_id]", or
"projects/[project_id]".


- - -
*/
  Parent?: string;

  // A description of the mute config.
  Description?: string;
}
export class MuteConfig extends Resource {
  /*
Name of the mute config. Its format is
organizations/{organization}/muteConfigs/{configId},
folders/{folder}/muteConfigs/{configId},
or projects/{project}/muteConfigs/{configId}
*/
  public Name?: string;

  /*
Resource name of the new mute configs's parent. Its format is
"organizations/[organization_id]", "folders/[folder_id]", or
"projects/[project_id]".


- - -
*/
  public Parent?: string;

  /*
Output only. The most recent time at which the mute config was
updated. This field is set by the server and will be ignored if
provided on config creation or update.
*/
  public UpdateTime?: string;

  /*
The time at which the mute config was created. This field is set by
the server and will be ignored if provided on config creation.
*/
  public CreateTime?: string;

  // A description of the mute config.
  public Description?: string;

  /*
An expression that defines the filter to apply across create/update
events of findings. While creating a filter string, be mindful of
the scope in which the mute configuration is being created. E.g.,
If a filter contains project = X but is created under the
project = Y scope, it might not match any findings.
*/
  public Filter?: string;

  /*
Email address of the user who last edited the mute config. This
field is set by the server and will be ignored if provided on
config creation or update.
*/
  public MostRecentEditor?: string;

  // Unique identifier provided by the client within the parent scope.
  public MuteConfigId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Filter",
        "An expression that defines the filter to apply across create/update\nevents of findings. While creating a filter string, be mindful of\nthe scope in which the mute configuration is being created. E.g.,\nIf a filter contains project = X but is created under the\nproject = Y scope, it might not match any findings.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "MuteConfigId",
        "Unique identifier provided by the client within the parent scope.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        'Resource name of the new mute configs\'s parent. Its format is\n"organizations/[organization_id]", "folders/[folder_id]", or\n"projects/[project_id]".\n\n\n- - -',
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the mute config.",
        [],
        false,
        false,
      ),
    ];
  }
}
