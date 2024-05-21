import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface clouddeploy_TargetRun {
  // Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.
  location?: string;
}

export function clouddeploy_TargetRun_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "location",
      "Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.",
      [],
      true,
      false,
    ),
  ];
}
