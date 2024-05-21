import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudasset_getResourcesSearchAllResult {
  // The type of this resource.
  assetType?: string;

  // Labels associated with this resource.
  labels?: Map<string, string>;

  // Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`.
  location?: string;

  // Network tags associated with this resource.
  networkTags?: Array<string>;

  // Additional searchable attributes of this resource. Informational only. The exact set of attributes is subject to change. For example: project id, DNS name etc.
  additionalAttributes?: Array<string>;

  // One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes.
  description?: string;

  // The display name of this resource.
  displayName?: string;

  // The full resource name. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.
  name?: string;

  // The project that this resource belongs to, in the form of `projects/{project_number}`.
  project?: string;
}

export function cloudasset_getResourcesSearchAllResult_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The full resource name. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "project",
      "The project that this resource belongs to, in the form of `projects/{project_number}`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkTags",
      "Network tags associated with this resource.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalAttributes",
      "Additional searchable attributes of this resource. Informational only. The exact set of attributes is subject to change. For example: project id, DNS name etc.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "The display name of this resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "assetType",
      "The type of this resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Labels associated with this resource.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
