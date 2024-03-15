export interface PolicyBasedRouteWarning {
  /*
(Output)
Metadata about this warning in key: value format. The key should provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement.
*/
  Data?: Map<string, string>;

  /*
(Output)
A human-readable description of the warning code.
*/
  WarningMessage?: string;

  /*
(Output)
A warning code, if applicable.
*/
  Code?: string;
}
