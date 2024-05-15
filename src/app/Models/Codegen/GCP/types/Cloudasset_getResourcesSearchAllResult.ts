import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudasset_getResourcesSearchAllResult {
  // One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes.
  Description?: string;

  // The display name of this resource.
  DisplayName?: string;

  // Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`.
  Location?: string;

  // The project that this resource belongs to, in the form of `projects/{project_number}`.
  Project?: string;

  // Network tags associated with this resource.
  NetworkTags?: Array<string>;

  // Additional searchable attributes of this resource. Informational only. The exact set of attributes is subject to change. For example: project id, DNS name etc.
  AdditionalAttributes?: Array<string>;

  // The type of this resource.
  AssetType?: string;

  // Labels associated with this resource.
  Labels?: Map<string, string>;

  // The full resource name. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.
  Name?: string;
}

export function Cloudasset_getResourcesSearchAllResult_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Location",
      "Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The project that this resource belongs to, in the form of `projects/{project_number}`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AssetType",
      "The type of this resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The full resource name. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "Labels associated with this resource.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "The display name of this resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NetworkTags",
      "Network tags associated with this resource.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalAttributes",
      "Additional searchable attributes of this resource. Informational only. The exact set of attributes is subject to change. For example: project id, DNS name etc.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
