import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_RouterPeerBfd {
  /*
The minimum interval, in milliseconds, between BFD control packets
received from the peer router. The actual value is negotiated
between the two routers and is equal to the greater of this value
and the transmit interval of the other router. If set, this value
must be between 1000 and 30000.
*/
  minReceiveInterval?: number;

  /*
The minimum interval, in milliseconds, between BFD control packets
transmitted to the peer router. The actual value is negotiated
between the two routers and is equal to the greater of this value
and the corresponding receive interval of the other router. If set,
this value must be between 1000 and 30000.
*/
  minTransmitInterval?: number;

  /*
The number of consecutive BFD packets that must be missed before
BFD declares that a peer is unavailable. If set, the value must
be a value between 5 and 16.
*/
  multiplier?: number;

  /*
The BFD session initialization mode for this BGP peer.
If set to `ACTIVE`, the Cloud Router will initiate the BFD session
for this BGP peer. If set to `PASSIVE`, the Cloud Router will wait
for the peer router to initiate the BFD session for this BGP peer.
If set to `DISABLED`, BFD is disabled for this BGP peer.
Possible values are: `ACTIVE`, `DISABLED`, `PASSIVE`.
*/
  sessionInitializationMode?: string;
}

export function compute_RouterPeerBfd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minTransmitInterval",
      "The minimum interval, in milliseconds, between BFD control packets\ntransmitted to the peer router. The actual value is negotiated\nbetween the two routers and is equal to the greater of this value\nand the corresponding receive interval of the other router. If set,\nthis value must be between 1000 and 30000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "multiplier",
      "The number of consecutive BFD packets that must be missed before\nBFD declares that a peer is unavailable. If set, the value must\nbe a value between 5 and 16.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sessionInitializationMode",
      "The BFD session initialization mode for this BGP peer.\nIf set to `ACTIVE`, the Cloud Router will initiate the BFD session\nfor this BGP peer. If set to `PASSIVE`, the Cloud Router will wait\nfor the peer router to initiate the BFD session for this BGP peer.\nIf set to `DISABLED`, BFD is disabled for this BGP peer.\nPossible values are: `ACTIVE`, `DISABLED`, `PASSIVE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minReceiveInterval",
      "The minimum interval, in milliseconds, between BFD control packets\nreceived from the peer router. The actual value is negotiated\nbetween the two routers and is equal to the greater of this value\nand the transmit interval of the other router. If set, this value\nmust be between 1000 and 30000.",
      [],
      false,
      false,
    ),
  ];
}
