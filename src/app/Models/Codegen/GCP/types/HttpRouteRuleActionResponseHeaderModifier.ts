export interface HttpRouteRuleActionResponseHeaderModifier {
  // Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.
  Set?: Map<string, string>;

  // Add the headers with given map where key is the name of the header, value is the value of the header.
  Add?: Map<string, string>;

  // Remove headers (matching by header names) specified in the list.
  Removes?: Array<string>;
}
