import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage {
  // Relative path from the source to the Skaffold file.
  path?: string;

  // Cloud Storage source paths to copy recursively. For example, providing `gs://my-bucket/dir/configs/-` will result in Skaffold copying all files within the `dir/configs` directory in the bucket `my-bucket`.
  source?: string;
}

export function clouddeploy_CustomTargetTypeCustomActionsIncludeSkaffoldModuleGoogleCloudStorage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "path",
      "Relative path from the source to the Skaffold file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "Cloud Storage source paths to copy recursively. For example, providing `gs://my-bucket/dir/configs/*` will result in Skaffold copying all files within the `dir/configs` directory in the bucket `my-bucket`.",
      [],
      true,
      false,
    ),
  ];
}
