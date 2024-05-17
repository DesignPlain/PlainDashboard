import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Looker_InstanceUserMetadata {
  // Number of additional Viewer Users to allocate to the Looker Instance.
  AdditionalViewerUserCount?: number;

  // Number of additional Developer Users to allocate to the Looker Instance.
  AdditionalDeveloperUserCount?: number;

  // Number of additional Standard Users to allocate to the Looker Instance.
  AdditionalStandardUserCount?: number;
}

export function Looker_InstanceUserMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "AdditionalViewerUserCount",
      "Number of additional Viewer Users to allocate to the Looker Instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "AdditionalDeveloperUserCount",
      "Number of additional Developer Users to allocate to the Looker Instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "AdditionalStandardUserCount",
      "Number of additional Standard Users to allocate to the Looker Instance.",
      [],
      false,
      false,
    ),
  ];
}
