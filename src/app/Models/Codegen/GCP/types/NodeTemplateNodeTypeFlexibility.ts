export interface NodeTemplateNodeTypeFlexibility {
  // Number of virtual CPUs to use.
  Cpus?: string;

  /*
(Output)
Use local SSD
*/
  LocalSsd?: string;

  // Physical memory available to the node, defined in MB.
  Memory?: string;
}
