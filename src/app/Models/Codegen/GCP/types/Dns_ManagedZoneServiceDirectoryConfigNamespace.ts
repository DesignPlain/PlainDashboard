import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dns_ManagedZoneServiceDirectoryConfigNamespace {
  /*
The fully qualified or partial URL of the service directory namespace that should be
associated with the zone. This should be formatted like
`https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}`
or simply `projects/{project}/locations/{location}/namespaces/{namespace_id}`
Ignored for `public` visibility zones.
*/
  NamespaceUrl?: string;
}

export function Dns_ManagedZoneServiceDirectoryConfigNamespace_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NamespaceUrl",
      "The fully qualified or partial URL of the service directory namespace that should be\nassociated with the zone. This should be formatted like\n`https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}`\nor simply `projects/{project}/locations/{location}/namespaces/{namespace_id}`\nIgnored for `public` visibility zones.",
      [],
      true,
      false,
    ),
  ];
}
