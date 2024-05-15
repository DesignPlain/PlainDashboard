import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Projects_getProjectProject {
  // The numeric identifier of the project.
  Number?: string;

  // An optional reference to a parent resource.
  Parent?: Map<string, string>;

  // The project id of the project.
  ProjectId?: string;

  // Creation time in RFC3339 UTC "Zulu" format.
  CreateTime?: string;

  // A set of key/value label pairs assigned on a project.
  Labels?: Map<string, string>;

  // The Project lifecycle state.
  LifecycleState?: string;

  // The optional user-assigned display name of the project.
  Name?: string;
}

export function Projects_getProjectProject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      'Creation time in RFC3339 UTC "Zulu" format.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "A set of key/value label pairs assigned on a project.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LifecycleState",
      "The Project lifecycle state.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The optional user-assigned display name of the project.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Number",
      "The numeric identifier of the project.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Parent",
      "An optional reference to a parent resource.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The project id of the project.",
      [],
      true,
      false,
    ),
  ];
}
