export interface RouterPeerBfd {
  /*
The minimum interval, in milliseconds, between BFD control packets
received from the peer router. The actual value is negotiated
between the two routers and is equal to the greater of this value
and the transmit interval of the other router. If set, this value
must be between 1000 and 30000.
*/
  MinReceiveInterval?: number;

  /*
The minimum interval, in milliseconds, between BFD control packets
transmitted to the peer router. The actual value is negotiated
between the two routers and is equal to the greater of this value
and the corresponding receive interval of the other router. If set,
this value must be between 1000 and 30000.
*/
  MinTransmitInterval?: number;

  /*
The number of consecutive BFD packets that must be missed before
BFD declares that a peer is unavailable. If set, the value must
be a value between 5 and 16.
*/
  Multiplier?: number;

  /*
The BFD session initialization mode for this BGP peer.
If set to `ACTIVE`, the Cloud Router will initiate the BFD session
for this BGP peer. If set to `PASSIVE`, the Cloud Router will wait
for the peer router to initiate the BFD session for this BGP peer.
If set to `DISABLED`, BFD is disabled for this BGP peer.
Possible values are: `ACTIVE`, `DISABLED`, `PASSIVE`.
*/
  SessionInitializationMode?: string;
}
