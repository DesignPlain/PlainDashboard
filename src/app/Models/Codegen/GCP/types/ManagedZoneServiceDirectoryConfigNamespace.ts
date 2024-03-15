export interface ManagedZoneServiceDirectoryConfigNamespace {
  /*
The fully qualified or partial URL of the service directory namespace that should be
associated with the zone. This should be formatted like
`https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}`
or simply `projects/{project}/locations/{location}/namespaces/{namespace_id}`
Ignored for `public` visibility zones.
*/
  NamespaceUrl?: string;
}
