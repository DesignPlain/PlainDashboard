import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dns_ManagedZoneServiceDirectoryConfigNamespace {
  /*
The fully qualified or partial URL of the service directory namespace that should be
associated with the zone. This should be formatted like
`https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}`
or simply `projects/{project}/locations/{location}/namespaces/{namespace_id}`
Ignored for `public` visibility zones.
*/
  namespaceUrl?: string;
}

export function dns_ManagedZoneServiceDirectoryConfigNamespace_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespaceUrl",
      "The fully qualified or partial URL of the service directory namespace that should be\nassociated with the zone. This should be formatted like\n`https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}`\nor simply `projects/{project}/locations/{location}/namespaces/{namespace_id}`\nIgnored for `public` visibility zones.",
      () => [],
      true,
      false,
    ),
  ];
}
