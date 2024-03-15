export interface InstanceMemcacheNode {
  /*
(Output)
Hostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node.
*/
  Host?: string;

  /*
(Output)
Identifier of the Memcached node. The node id does not include project or location like the Memcached instance name.
*/
  NodeId?: string;

  /*
(Output)
The port number of the Memcached server on this node.
*/
  Port?: number;

  /*
(Output)
Current state of the Memcached node.
*/
  State?: string;

  /*
(Output)
Location (GCP Zone) for the Memcached node.
*/
  Zone?: string;
}
