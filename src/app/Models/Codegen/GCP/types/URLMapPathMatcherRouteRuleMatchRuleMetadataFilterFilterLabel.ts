export interface URLMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel {
  /*
Name of metadata label. The name can have a maximum length of 1024 characters
and must be at least 1 character long.
*/
  Name?: string;

  /*
The value of the label must match the specified value. value can have a maximum
length of 1024 characters.
*/
  Value?: string;
}
