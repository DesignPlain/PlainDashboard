import { AccessLevelConditionVpcNetworkSourceVpcSubnetwork } from "./AccessLevelConditionVpcNetworkSourceVpcSubnetwork";

export interface AccessLevelConditionVpcNetworkSource {
  /*
Sub networks within a VPC network.
Structure is documented below.
*/
  VpcSubnetwork?: AccessLevelConditionVpcNetworkSourceVpcSubnetwork;
}
