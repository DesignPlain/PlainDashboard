export interface EnvironmentNodeConfig {
  /*
(Output)
The current total number of gateway nodes that each environment currently has across
all instances.
*/
  CurrentAggregateNodeCount?: string;

  /*
The maximum total number of gateway nodes that the is reserved for all instances that
has the specified environment. If not specified, the default is determined by the
recommended maximum number of nodes for that gateway.
*/
  MaxNodeCount?: string;

  /*
The minimum total number of gateway nodes that the is reserved for all instances that
has the specified environment. If not specified, the default is determined by the
recommended minimum number of nodes for that gateway.
*/
  MinNodeCount?: string;
}
