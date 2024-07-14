import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface batch_ComputeEnvironmentComputeResourcesLaunchTemplate {
  // ID of the launch template. You must specify either the launch template ID or launch template name in the request, but not both.
  launchTemplateId?: string;

  // Name of the launch template.
  launchTemplateName?: string;

  // The version number of the launch template. Default: The default version of the launch template.
  version?: string;
}

export function batch_ComputeEnvironmentComputeResourcesLaunchTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "launchTemplateId",
      "ID of the launch template. You must specify either the launch template ID or launch template name in the request, but not both.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "launchTemplateName",
      "Name of the launch template.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "The version number of the launch template. Default: The default version of the launch template.",
      [],
      false,
      false,
    ),
  ];
}
