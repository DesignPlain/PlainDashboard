export interface InstanceMemcacheParameters {
  // User-defined set of parameters to use in the memcache process.
  Params?: Map<string, string>;

  /*
(Output)
This is a unique ID associated with this set of parameters.
*/
  Id?: string;
}
