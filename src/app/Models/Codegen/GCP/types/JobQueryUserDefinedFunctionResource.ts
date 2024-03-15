export interface JobQueryUserDefinedFunctionResource {
  /*
An inline resource that contains code for a user-defined function (UDF).
Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
*/
  InlineCode?: string;

  // A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
  ResourceUri?: string;
}
