export interface InstanceNodeConfig {
  /*
Memory size in Mebibytes for each memcache node.

- - -
*/
  MemorySizeMb?: number;

  // Number of CPUs per node.
  CpuCount?: number;
}
