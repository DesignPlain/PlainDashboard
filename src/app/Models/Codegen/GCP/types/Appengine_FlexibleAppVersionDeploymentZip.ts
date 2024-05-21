import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appengine_FlexibleAppVersionDeploymentZip {
  // files count
  filesCount?: number;

  // Source URL
  sourceUrl?: string;
}

export function appengine_FlexibleAppVersionDeploymentZip_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "filesCount",
      "files count",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceUrl",
      "Source URL",
      [],
      true,
      false,
    ),
  ];
}
