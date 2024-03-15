export interface URLMapHostRule {
  /*
The name of the PathMatcher to use to match the path portion of the URL if the
hostRule matches the URL's host portion.
*/
  PathMatcher?: string;

  /*
An optional description of this resource. Provide this property when you create
the resource.
*/
  Description?: string;

  /*
The list of host patterns to match. They must be valid hostnames, except - will
match any string of ([a-z0-9-.]-). In that case, - must be the first character
and must be followed in the pattern by either - or ..
*/
  Hosts?: Array<string>;
}
