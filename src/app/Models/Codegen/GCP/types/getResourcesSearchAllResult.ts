export interface getResourcesSearchAllResult {
  // The full resource name. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.
  Name?: string;

  // The type of this resource.
  AssetType?: string;

  // One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes.
  Description?: string;

  // Labels associated with this resource.
  Labels?: Map<string, string>;

  // Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`.
  Location?: string;

  // Network tags associated with this resource.
  NetworkTags?: Array<string>;

  // The project that this resource belongs to, in the form of `projects/{project_number}`.
  Project?: string;

  // Additional searchable attributes of this resource. Informational only. The exact set of attributes is subject to change. For example: project id, DNS name etc.
  AdditionalAttributes?: Array<string>;

  // The display name of this resource.
  DisplayName?: string;
}
