import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface projects_getProjectProject {
  // A set of key/value label pairs assigned on a project.
  labels?: Map<string, string>;

  // The Project lifecycle state.
  lifecycleState?: string;

  // The optional user-assigned display name of the project.
  name?: string;

  // The numeric identifier of the project.
  number?: string;

  // An optional reference to a parent resource.
  parent?: Map<string, string>;

  // The project id of the project.
  projectId?: string;

  // Creation time in RFC3339 UTC "Zulu" format.
  createTime?: string;
}

export function projects_getProjectProject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "A set of key/value label pairs assigned on a project.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lifecycleState",
      "The Project lifecycle state.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The optional user-assigned display name of the project.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "number",
      "The numeric identifier of the project.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "parent",
      "An optional reference to a parent resource.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The project id of the project.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      'Creation time in RFC3339 UTC "Zulu" format.',
      [],
      true,
      false,
    ),
  ];
}
