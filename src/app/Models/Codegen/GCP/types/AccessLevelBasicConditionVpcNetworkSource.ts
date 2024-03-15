import { AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork } from "./AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork";

export interface AccessLevelBasicConditionVpcNetworkSource {
  /*
Sub networks within a VPC network.
Structure is documented below.
*/
  VpcSubnetwork?: AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork;
}
